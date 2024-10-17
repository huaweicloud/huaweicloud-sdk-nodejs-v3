import { RdsDbRequestDatabases } from './RdsDbRequestDatabases';


export class RdsDbRequest {
    public databases?: Array<RdsDbRequestDatabases>;
    public constructor(databases?: Array<RdsDbRequestDatabases>) { 
        this['databases'] = databases;
    }
    public withDatabases(databases: Array<RdsDbRequestDatabases>): RdsDbRequest {
        this['databases'] = databases;
        return this;
    }
}