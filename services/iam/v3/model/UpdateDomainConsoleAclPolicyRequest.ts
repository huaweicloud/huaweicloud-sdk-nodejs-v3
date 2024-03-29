import { UpdateDomainConsoleAclPolicyRequestBody } from './UpdateDomainConsoleAclPolicyRequestBody';


export class UpdateDomainConsoleAclPolicyRequest {
    private 'domain_id'?: string;
    public body?: UpdateDomainConsoleAclPolicyRequestBody;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateDomainConsoleAclPolicyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: UpdateDomainConsoleAclPolicyRequestBody): UpdateDomainConsoleAclPolicyRequest {
        this['body'] = body;
        return this;
    }
}