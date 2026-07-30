import { ReqCreateAssociatedResourceRules } from './ReqCreateAssociatedResourceRules';


export class CreateAssociatedResourceRulesRequest {
    public body?: ReqCreateAssociatedResourceRules;
    public constructor() { 
    }
    public withBody(body: ReqCreateAssociatedResourceRules): CreateAssociatedResourceRulesRequest {
        this['body'] = body;
        return this;
    }
}