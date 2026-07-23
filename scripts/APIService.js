"use strict";
const checked = document.getElementById('ma');
const button = document.getElementById('button');
button.addEventListener('click', () => {
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
});
