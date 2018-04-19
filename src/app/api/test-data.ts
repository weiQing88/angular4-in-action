import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
     createDb() {
          return { code : 1, msg : 'ok', data : '112333' } 
     }
}