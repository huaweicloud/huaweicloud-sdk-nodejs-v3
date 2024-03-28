import { BatchDeleteSqlJobTemplatesRequestBody } from './BatchDeleteSqlJobTemplatesRequestBody';


export class BatchDeleteSqlJobTemplatesRequest {
    public body?: BatchDeleteSqlJobTemplatesRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteSqlJobTemplatesRequestBody): BatchDeleteSqlJobTemplatesRequest {
        this['body'] = body;
        return this;
    }
}