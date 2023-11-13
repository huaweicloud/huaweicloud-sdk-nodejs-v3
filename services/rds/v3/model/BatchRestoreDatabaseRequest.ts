import { PostgreSQLRestoreDatabaseRequest } from './PostgreSQLRestoreDatabaseRequest';


export class BatchRestoreDatabaseRequest {
    public body?: PostgreSQLRestoreDatabaseRequest;
    public constructor() { 
    }
    public withBody(body: PostgreSQLRestoreDatabaseRequest): BatchRestoreDatabaseRequest {
        this['body'] = body;
        return this;
    }
}