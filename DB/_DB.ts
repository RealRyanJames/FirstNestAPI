import { DuckDBInstance } from '@duckdb/node-api';

interface IConnectable {
  getConnectableFile(): string;
}

class IClient implements IConnectable {

  getConnectableFile(): string {
    return 'main.db';
  }

  getLowerCase(str: string): string {
    return str.toUpperCase();
  }
}

async function connectDB() {

  const connect = new IClient();
  const doc1 = connect.getLowerCase(connect.getConnectableFile());

  const connection = await DuckDBInstance.create(doc1);
  return await connection.connect();
}

async function main() {
  return await connectDB();
}

main().catch((_) => console.log(_));
