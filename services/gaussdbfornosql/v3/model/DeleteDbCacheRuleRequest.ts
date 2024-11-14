import { DeleteDbCacheRuleRequestBody } from './DeleteDbCacheRuleRequestBody';


export class DeleteDbCacheRuleRequest {
    public body?: DeleteDbCacheRuleRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteDbCacheRuleRequestBody): DeleteDbCacheRuleRequest {
        this['body'] = body;
        return this;
    }
}