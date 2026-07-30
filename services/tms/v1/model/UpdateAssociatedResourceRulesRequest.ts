import { ReqUpdateAssociatedResourceRules } from './ReqUpdateAssociatedResourceRules';


export class UpdateAssociatedResourceRulesRequest {
    public body?: ReqUpdateAssociatedResourceRules;
    public constructor() { 
    }
    public withBody(body: ReqUpdateAssociatedResourceRules): UpdateAssociatedResourceRulesRequest {
        this['body'] = body;
        return this;
    }
}