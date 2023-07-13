import { UpdateDomainPasswordPolicyRequestBody } from './UpdateDomainPasswordPolicyRequestBody';


export class UpdateDomainPasswordPolicyRequest {
    private 'domain_id': string | undefined;
    public body?: UpdateDomainPasswordPolicyRequestBody;
    public constructor(domainId?: any) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateDomainPasswordPolicyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withBody(body: UpdateDomainPasswordPolicyRequestBody): UpdateDomainPasswordPolicyRequest {
        this['body'] = body;
        return this;
    }
}