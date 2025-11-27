import { CreateRuleRequestBody } from './CreateRuleRequestBody';


export class CreateRuleRequest {
    public body?: CreateRuleRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateRuleRequestBody): CreateRuleRequest {
        this['body'] = body;
        return this;
    }
}