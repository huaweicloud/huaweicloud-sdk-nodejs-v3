import { RestoreDatabaseInstance } from './RestoreDatabaseInstance';


export class PostgreSQLRestoreDatabaseRequest {
    public instances?: Array<RestoreDatabaseInstance>;
    public constructor() { 
    }
    public withInstances(instances: Array<RestoreDatabaseInstance>): PostgreSQLRestoreDatabaseRequest {
        this['instances'] = instances;
        return this;
    }
}