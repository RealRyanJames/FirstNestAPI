const checkedMA = document.getElementById('ma') as HTMLInputElement;
const checkedNH = document.getElementById('NH') as HTMLInputElement;

interface IClients {
  getClientsInfo(): string;
  getLowerApplication(text: string): string;
}

class Runner implements IClients {
  getClientsInfo(): string {
    return 'Sucessfully Working';
  }

  getLowerApplication(text: string): string {
    return text.toLowerCase();
  }

  buttonUI(btn: HTMLButtonElement): HTMLButtonElement {
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
      const doc1 = document.getElementById('elment') as HTMLElement;
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
      const doc1 = document.getElementById('elment') as HTMLElement;
      doc1.textContent = await getMainInfoNH();
    }
    mainNH().catch((_) => console.log(_));
  }
}

const button = document.getElementById('button') as HTMLButtonElement;
const client = new Runner();
const btnClient = client.buttonUI(button);

btnClient.addEventListener('click', setup);
