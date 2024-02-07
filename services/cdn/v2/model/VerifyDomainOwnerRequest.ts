import { VerifyDomainOwnerRequestBody } from './VerifyDomainOwnerRequestBody';


export class VerifyDomainOwnerRequest {
    private 'domain_name'?: string;
    public body?: VerifyDomainOwnerRequestBody;
    public constructor(domainName?: string) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): VerifyDomainOwnerRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withBody(body: VerifyDomainOwnerRequestBody): VerifyDomainOwnerRequest {
        this['body'] = body;
        return this;
    }
}