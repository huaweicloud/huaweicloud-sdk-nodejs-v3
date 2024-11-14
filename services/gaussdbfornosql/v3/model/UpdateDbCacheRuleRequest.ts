import { UpdateDbCacheRuleRequestBody } from './UpdateDbCacheRuleRequestBody';


export class UpdateDbCacheRuleRequest {
    public body?: UpdateDbCacheRuleRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateDbCacheRuleRequestBody): UpdateDbCacheRuleRequest {
        this['body'] = body;
        return this;
    }
}