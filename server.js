const express = require('express');

const app = express();
const mtg = require('mtgsdk');
const port = process.env.PORT || 5000;

app.get('/api/allcards', (req, res) => {

    getAllCards().then(crds => res.send(crds))

});
app.get('/api/booster', (req, res) => {
    console.log(req.query.name);
    getBooster(req.query.edition).then(crds => res.send(crds))

});
app.get('/api/cardsearch', (req, res) => {
    console.log(req.query.name);
    getCardSearch(req.query.name).then(crds => res.send(crds))

});

async function getBooster(edition) {

    return new Promise(function (resolve, reject) {
        let sendcards = []
        let cont = 0
        let booster = mtg.set.booster(edition)
            .then(result => {
                console.log(result.set.name) // "Booster from edition"
            })
        booster.on('data', card => {
            sendcards.push(card)
            console.log(card.name);
            if (cont == 2) {
                // console.log(sendcards);
                resolve(sendcards)
            }
            cont = cont + 1
        })


        booster.on('end', card => {
            resolve(sendcards)
        })
    })
}

async function getAllCards() {

    return new Promise(function (resolve, reject) {
        let sendcards = []
        let cont = 0
        let allCards = mtg.card.all({ name: '', pageSize: 1 })
        allCards.on('data', card => {
            sendcards.push(card)
            console.log(card.name);
            if (cont == 2) {
                // console.log(sendcards);
                resolve(sendcards)
            }
            cont = cont + 1
        })


        allCards.on('end', card => {
            resolve(sendcards)
        })
    })
}

async function getCardSearch(searched) {

    return new Promise(function (resolve, reject) {
        let sendcards = []
        let cont = 0
        let cardSearch = mtg.card.all({ name: searched, pageSize: 1 })
        cardSearch.on('data', card => {
            console.log(card.imageUrl);
            sendcards.push(card)
            console.log(cont);
            if (cont == 20) {
                console.log(sendcards);
                resolve(sendcards)
            }
            cont = cont + 1
        })
        cardSearch.on('end', card => {
            console.log(sendcards);
            resolve(sendcards)
        })
    })
}

app.listen(port, () => console.log(`Listening on port ${port}`));
