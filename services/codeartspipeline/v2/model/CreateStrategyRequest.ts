import { CreateRuleSetReq } from './CreateRuleSetReq';


export class CreateStrategyRequest {
    private 'domain_id'?: string;
    public body?: CreateRuleSetReq;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): CreateStrategyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: CreateRuleSetReq): CreateStrategyRequest {
        this['body'] = body;
        return this;
    }
}