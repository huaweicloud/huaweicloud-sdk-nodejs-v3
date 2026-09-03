import { ListSqlTemplatesRequestBody } from './ListSqlTemplatesRequestBody';


export class ListSqlTemplatesRequest {
    public body?: ListSqlTemplatesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListSqlTemplatesRequestBody): ListSqlTemplatesRequest {
        this['body'] = body;
        return this;
    }
}