import { CreateRuleReq } from './CreateRuleReq';


export class CreateRuleRequest {
    private 'domain_id'?: string;
    public body?: CreateRuleReq;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): CreateRuleRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: CreateRuleReq): CreateRuleRequest {
        this['body'] = body;
        return this;
    }
}