import { MuteRule } from './MuteRule';


export class AddMuteRulesRequest {
    public body?: MuteRule;
    public constructor() { 
    }
    public withBody(body: MuteRule): AddMuteRulesRequest {
        this['body'] = body;
        return this;
    }
}