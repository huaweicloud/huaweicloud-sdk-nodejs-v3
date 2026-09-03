import { ListTasksBySqlTemplateIdRequestBody } from './ListTasksBySqlTemplateIdRequestBody';


export class ListTasksBySqlTemplateIdRequest {
    public body?: ListTasksBySqlTemplateIdRequestBody;
    public constructor() { 
    }
    public withBody(body: ListTasksBySqlTemplateIdRequestBody): ListTasksBySqlTemplateIdRequest {
        this['body'] = body;
        return this;
    }
}