import { RestoreDatabaseInstance } from './RestoreDatabaseInstance';


export class PostgreSQLRestoreDatabaseRequest {
    public instances?: Array<RestoreDatabaseInstance>;
    public constructor(instances?: Array<RestoreDatabaseInstance>) { 
        this['instances'] = instances;
    }
    public withInstances(instances: Array<RestoreDatabaseInstance>): PostgreSQLRestoreDatabaseRequest {
        this['instances'] = instances;
        return this;
    }
}