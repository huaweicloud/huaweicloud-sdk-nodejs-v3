import { MuteRule } from './MuteRule';


export class UpdateMuteRuleRequest {
    public body?: MuteRule;
    public constructor() { 
    }
    public withBody(body: MuteRule): UpdateMuteRuleRequest {
        this['body'] = body;
        return this;
    }
}