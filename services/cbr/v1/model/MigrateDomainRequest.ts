import { DomainMigrate } from './DomainMigrate';


export class MigrateDomainRequest {
    public body?: DomainMigrate;
    public constructor() { 
    }
    public withBody(body: DomainMigrate): MigrateDomainRequest {
        this['body'] = body;
        return this;
    }
}