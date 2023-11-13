import { PostgreSQLRestoreTableInstance } from './PostgreSQLRestoreTableInstance';


export class PostgreSQLRestoreTableRequest {
    public instances?: Array<PostgreSQLRestoreTableInstance>;
    public constructor() { 
    }
    public withInstances(instances: Array<PostgreSQLRestoreTableInstance>): PostgreSQLRestoreTableRequest {
        this['instances'] = instances;
        return this;
    }
}