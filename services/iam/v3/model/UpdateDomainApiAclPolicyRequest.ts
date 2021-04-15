import { UpdateDomainApiAclPolicyRequestBody } from './UpdateDomainApiAclPolicyRequestBody';


export class UpdateDomainApiAclPolicyRequest {
    private 'domain_id': string | undefined;
    public body?: UpdateDomainApiAclPolicyRequestBody;
    public constructor(domainId?: any) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateDomainApiAclPolicyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withBody(body: UpdateDomainApiAclPolicyRequestBody): UpdateDomainApiAclPolicyRequest {
        this['body'] = body;
        return this;
    }
}