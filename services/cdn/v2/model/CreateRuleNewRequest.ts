import { CreateRuleRequest } from './CreateRuleRequest';


export class CreateRuleNewRequest {
    private 'domain_name'?: string;
    public body?: CreateRuleRequest;
    public constructor(domainName?: string) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): CreateRuleNewRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withBody(body: CreateRuleRequest): CreateRuleNewRequest {
        this['body'] = body;
        return this;
    }
}