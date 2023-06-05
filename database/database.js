import SQLite from 'react-native-sqlite-storage'

const databaseName = 'YourDatabaseName.db';
const databaseVersion = '1.0';
const databaseDisplayname = 'Your Database Display Name';
const databaseSize = 200000; // Desired database size in bytes


const db = SQLite.openDatabase(
    databaseName,
    databaseVersion,
    databaseDisplayname,
    databaseSize,
    () => {},
    error => {
      console.error('Error opening database: ', error);
    }
  );
  
  export default db;