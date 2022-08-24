import { Injectable } from '@angular/core';
import { openDB } from 'idb';
import { Person } from '../models/Person';

@Injectable({ providedIn: 'root' })
export class SchoolService {
  db: any;
  constructor() {
    this.initialDb();
  }

  async initialDb(): Promise<void> {
    this.db = await openDB('db-ali', 2, {
      upgrade(dbs) {
        dbs.createObjectStore('tabla-person', {
          keyPath: 'id',
          autoIncrement: true,
        });

        const store = dbs.createObjectStore('person', {
          keyPath: 'idPerson',
          autoIncrement: true,
        });
      },
    });

    // await this.db.add('person', {
    //   key: 'jos',
    //   value: 2,
    // });

    // await this.db.add('tabla-person', {
    //   name: 'josue',
    //   lastName: 7,
    // });

    // Add
    // const tx = this.db.transaction('tabla-person', 'readwrite');
    // await tx.store.add({
    //   name: 'amilcar',
    //   lastName: 1,
    // });
    // await tx.done;

    // Add
    // const tx = this.db.transaction('person', 'readwrite');
    // await tx.store.add({
    //   name: 'josue',
    //   lastName: 7,
    // });
    // await tx.done;

    // Delete
    // const txt = this.db.transaction('person', 'readwrite');
    // await txt.store.delete(17);
    // await txt.done;

    console.log(await this.db.getAll('person'));
    console.log(await this.db.getAll('tabla-person'));
  }
}
