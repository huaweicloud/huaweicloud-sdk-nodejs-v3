import { CreateResolverRuleRequestBody } from './CreateResolverRuleRequestBody';


export class CreateResolverRuleRequest {
    public body?: CreateResolverRuleRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateResolverRuleRequestBody): CreateResolverRuleRequest {
        this['body'] = body;
        return this;
    }
}