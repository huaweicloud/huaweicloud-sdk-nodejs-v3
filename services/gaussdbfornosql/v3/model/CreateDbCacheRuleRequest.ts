import { CreateDbCacheRuleRequestBody } from './CreateDbCacheRuleRequestBody';


export class CreateDbCacheRuleRequest {
    public body?: CreateDbCacheRuleRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDbCacheRuleRequestBody): CreateDbCacheRuleRequest {
        this['body'] = body;
        return this;
    }
}