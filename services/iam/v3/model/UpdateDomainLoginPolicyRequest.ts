import { UpdateDomainLoginPolicyRequestBody } from './UpdateDomainLoginPolicyRequestBody';


export class UpdateDomainLoginPolicyRequest {
    private 'domain_id': string | undefined;
    public body?: UpdateDomainLoginPolicyRequestBody;
    public constructor(domainId?: any) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateDomainLoginPolicyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withBody(body: UpdateDomainLoginPolicyRequestBody): UpdateDomainLoginPolicyRequest {
        this['body'] = body;
        return this;
    }
}