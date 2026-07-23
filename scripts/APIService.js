"use strict";
const checked = document.getElementById('ma');
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
    if (checked.checked) {
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
}
const button = document.getElementById('button');
const client = new Runner();
const btnClient = client.buttonUI(button);
btnClient.addEventListener('click', setup);
