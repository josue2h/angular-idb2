import { openDB, DBSchema } from 'idb';

export interface Person extends DBSchema {
  person: {
    key: string;
    value: {
      idPerson: number;
      name: string;
      lastName: string;
      age: number;
    };
  };
}
