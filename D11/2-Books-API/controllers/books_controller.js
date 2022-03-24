const express = require('express')
const languages = express.Router()
const Language = require('../models/language.js')

// Index:
languages.get('/', (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages)
        })
})

languages.get('/seed', (req, res) => {
    Language.insertMany(
        [
            {
                "name": "english",
                "greeting": "Hello world",
                "pangram": "The quick brown fox jumps over the lazy dog",
                "filler": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },{
                "name": "spanish",
                "greeting": "Hola mundo",
                "pangram": "Benjamín pidió una bebida de kiwi y fresa; Noé, sin vergüenza, la más exquisita champaña del menú"
            },{
                "name": "korean",
                "greeting": "세상아, 안녕",
                "pangram": "웬 초콜릿? 제가 원했던 건 뻥튀기 쬐끔과 의류예요. 얘야, 왜 또 불평?"
            },{
                "name": "swedish",
                "greeting": "Hej världen",
                "filler": "Löksås ipsum äng miljoner både varit inom äng mjuka ordningens, vid sitt söka jäst ska stora miljoner ska vi varit, åker äng brunsås träutensilierna rännil precis tre där."
            },{
                "name": "hindi",
                "greeting": "नमस्ते दुनिया",
                "pangram": "ऋषियों को सताने वाले दुष्ट राक्षसों के राजा रावण का सर्वनाश करने वाले विष्णुवतार भगवान श्रीराम, अयोध्या के महाराज दशरथ के बड़े सपुत्र थे।",
                "filler": "पेदा तरीके गुजरना स्वतंत्र सार्वजनिक जिम्मे अनुवाद दौरान पसंद दिये विश्व पुस्तक मुख्यतह भाति ध्वनि पहोचने तकनीकी उपलब्ध अधिकांश सोफ़्टवेर सहयोग भाषा दिये प्राण असक्षम विभाजनक्षमता पहोच। अर्थपुर्ण विश्वव्यापि ७हल विवरन अधिकार द्वारा कार्यलय भीयह प्रतिबध पुष्टिकर्ता विश्वव्यापि विकास जिवन सुनत जिम्मे ज्यादा अंग्रेजी वर्णन तकनिकल तकनीकी प्रव्रुति उन्हे सुना"
            }, {
                "name": "swahili",
                "greeting": "Salamu, dunia"
            }
        ]
    ).then(books => {
            res.json({
                message: "Seed successful!"
            })
        })
})

// Show:
books.put('/:name', (req, res) => {
    Book.findOne({ name: req.params.name.toLowerCase() })
        .then(book => {
            res.json(book)
        })
})

module.exports = books