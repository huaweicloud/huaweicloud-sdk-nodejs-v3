import { SetRuleRestrictionReq } from './SetRuleRestrictionReq';


export class SetRuleRestrictionRequest {
    public body?: SetRuleRestrictionReq;
    public constructor() { 
    }
    public withBody(body: SetRuleRestrictionReq): SetRuleRestrictionRequest {
        this['body'] = body;
        return this;
    }
}