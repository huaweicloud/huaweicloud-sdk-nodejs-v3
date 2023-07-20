import { DeleteSqlTemplatesRequestBody } from './DeleteSqlTemplatesRequestBody';


export class DeleteSqlTemplatesRequest {
    public body?: DeleteSqlTemplatesRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteSqlTemplatesRequestBody): DeleteSqlTemplatesRequest {
        this['body'] = body;
        return this;
    }
}