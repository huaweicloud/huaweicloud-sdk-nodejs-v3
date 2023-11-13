import { PostgreSQLRestoreDatabaseInstance } from './PostgreSQLRestoreDatabaseInstance';


export class PostgreSQLRestoreDatabaseRequest {
    public instances?: Array<PostgreSQLRestoreDatabaseInstance>;
    public constructor() { 
    }
    public withInstances(instances: Array<PostgreSQLRestoreDatabaseInstance>): PostgreSQLRestoreDatabaseRequest {
        this['instances'] = instances;
        return this;
    }
}