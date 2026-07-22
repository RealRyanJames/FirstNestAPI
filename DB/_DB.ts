import duckdb, { DuckDBConnection } from '@duckdb/node-api';

console.log(duckdb.version());

async function connectDB() {

  const connection = await DuckDBConnection.create();
  return connection;
}

async function main() {
  return await connectDB();

}

main().catch((_) => console.log(_));
