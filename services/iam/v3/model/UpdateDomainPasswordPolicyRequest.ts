import { UpdateDomainPasswordPolicyRequestBody } from './UpdateDomainPasswordPolicyRequestBody';


export class UpdateDomainPasswordPolicyRequest {
    private 'domain_id'?: string;
    public body?: UpdateDomainPasswordPolicyRequestBody;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateDomainPasswordPolicyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: UpdateDomainPasswordPolicyRequestBody): UpdateDomainPasswordPolicyRequest {
        this['body'] = body;
        return this;
    }
}