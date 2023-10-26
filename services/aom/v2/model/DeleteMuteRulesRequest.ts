import { DeleteMuteRuleName } from './DeleteMuteRuleName';


export class DeleteMuteRulesRequest {
    public body?: Array<DeleteMuteRuleName>;
    public constructor() { 
    }
    public withBody(body: Array<DeleteMuteRuleName>): DeleteMuteRulesRequest {
        this['body'] = body;
        return this;
    }
}