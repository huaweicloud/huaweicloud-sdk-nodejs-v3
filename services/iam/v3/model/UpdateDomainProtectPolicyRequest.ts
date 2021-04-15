import { UpdateDomainProtectPolicyRequestBody } from './UpdateDomainProtectPolicyRequestBody';


export class UpdateDomainProtectPolicyRequest {
    private 'domain_id': string | undefined;
    public body?: UpdateDomainProtectPolicyRequestBody;
    public constructor(domainId?: any) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateDomainProtectPolicyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withBody(body: UpdateDomainProtectPolicyRequestBody): UpdateDomainProtectPolicyRequest {
        this['body'] = body;
        return this;
    }
}