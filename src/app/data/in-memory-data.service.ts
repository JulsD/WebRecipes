import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let posts = [
      { id: 11, title: 'Mr. Nice' ,text: 'Mr. Nice', deskr: 'Mr. Nice', comment: 'Mr. Nice'},
      { id: 12, title: 'Narco' ,text: 'Narco', deskr: 'Narco', comment: 'Narco'},
      { id: 13, title: 'Bombasto' ,text: 'Bombasto', deskr: 'Bombasto', comment: 'Bombasto'},
      { id: 14, title: 'Celeritas' ,text: 'Celeritas', deskr: 'Celeritas', comment: 'Celeritas'},
      { id: 15, title: 'Magneta' ,text: 'Magneta', deskr: 'Magneta', comment: 'Magneta'}
    ];
    return {posts};
  }
}
