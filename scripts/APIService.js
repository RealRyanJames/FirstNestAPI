"use strict";
const checkedMA = document.getElementById('ma');
const checkedNH = document.getElementById('NH');
const checkedMaine = document.getElementById('Maine');
class Runner {
    getClientsInfo() {
        return 'Sucessfully Working';
    }
    getLowerApplication(text) {
        return text.toLowerCase();
    }
    buttonUI(btn) {
        return btn;
    }
}
function setup() {
    if (checkedMA.checked) {
        console.log('Checked');
        async function getMainInfo() {
            const r = await fetch('http://localhost:3000/states/MA');
            return r.text();
        }
        async function main() {
            const doc1 = document.getElementById('elment');
            doc1.textContent = await getMainInfo();
        }
        main().catch((_) => console.log(_));
    }
    if (checkedNH.checked) {
        async function getMainInfoNH() {
            const r = await fetch('http://localhost:3000/states/NH');
            return r.text();
        }
        async function mainNH() {
            const doc1 = document.getElementById('elment');
            doc1.textContent = await getMainInfoNH();
        }
        mainNH().catch((_) => console.log(_));
    }
    if (checkedMaine.checked) {
        async function getMainInfoMaine() {
            const r = await fetch('http://localhost:3000/states/Maine');
            return r.text();
        }
        async function mainMaine() {
            const doc1 = document.getElementById('elment');
            doc1.textContent = await getMainInfoMaine();
        }
        mainMaine().catch((_) => console.log(_));
    }
}
const button = document.getElementById('button');
const client = new Runner();
const btnClient = client.buttonUI(button);
btnClient.addEventListener('click', setup);
