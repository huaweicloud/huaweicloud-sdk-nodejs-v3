import { UpdateDomainApiAclPolicyRequestBody } from './UpdateDomainApiAclPolicyRequestBody';


export class UpdateDomainApiAclPolicyRequest {
    private 'domain_id'?: string;
    public body?: UpdateDomainApiAclPolicyRequestBody;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateDomainApiAclPolicyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: UpdateDomainApiAclPolicyRequestBody): UpdateDomainApiAclPolicyRequest {
        this['body'] = body;
        return this;
    }
}