import { UpdateDomainLoginPolicyRequestBody } from './UpdateDomainLoginPolicyRequestBody';


export class UpdateDomainLoginPolicyRequest {
    private 'domain_id'?: string;
    public body?: UpdateDomainLoginPolicyRequestBody;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateDomainLoginPolicyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: UpdateDomainLoginPolicyRequestBody): UpdateDomainLoginPolicyRequest {
        this['body'] = body;
        return this;
    }
}