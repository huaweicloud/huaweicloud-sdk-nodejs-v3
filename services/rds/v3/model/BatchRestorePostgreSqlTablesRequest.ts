import { PostgreSQLRestoreTableRequest } from './PostgreSQLRestoreTableRequest';


export class BatchRestorePostgreSqlTablesRequest {
    public body?: PostgreSQLRestoreTableRequest;
    public constructor() { 
    }
    public withBody(body: PostgreSQLRestoreTableRequest): BatchRestorePostgreSqlTablesRequest {
        this['body'] = body;
        return this;
    }
}