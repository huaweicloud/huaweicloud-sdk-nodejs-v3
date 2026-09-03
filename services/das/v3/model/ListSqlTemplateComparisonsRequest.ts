import { ListSqlTemplateComparisonsRequestBody } from './ListSqlTemplateComparisonsRequestBody';


export class ListSqlTemplateComparisonsRequest {
    public body?: ListSqlTemplateComparisonsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListSqlTemplateComparisonsRequestBody): ListSqlTemplateComparisonsRequest {
        this['body'] = body;
        return this;
    }
}