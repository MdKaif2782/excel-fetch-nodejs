const {db} = require('./Firebase');
const { doc, setDoc  } = require("firebase/firestore");



const reader = require('xlsx');
const fs = require('fs');
const file = reader.readFile('./Question_sheet_1.xlsx');
const sheet = file.Sheets['GK-1'];
const data = reader.utils.sheet_to_json(sheet);
console.log(data);

setDoc(doc(db, "questions", "GK-1"), data)
    .then(r => console.log(r))
    .catch(e => console.log(e));