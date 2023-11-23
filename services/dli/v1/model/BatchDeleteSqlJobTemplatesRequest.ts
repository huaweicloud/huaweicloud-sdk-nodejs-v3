import { DeleteSqlTemplatesRequestBody } from './DeleteSqlTemplatesRequestBody';


export class BatchDeleteSqlJobTemplatesRequest {
    public body?: DeleteSqlTemplatesRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteSqlTemplatesRequestBody): BatchDeleteSqlJobTemplatesRequest {
        this['body'] = body;
        return this;
    }
}