import { TenantOpenSourceRuleSetCreateVO } from './TenantOpenSourceRuleSetCreateVO';


export class CreateOpenSourceStrategyRequest {
    private 'domain_id'?: string;
    public body?: TenantOpenSourceRuleSetCreateVO;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): CreateOpenSourceStrategyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: TenantOpenSourceRuleSetCreateVO): CreateOpenSourceStrategyRequest {
        this['body'] = body;
        return this;
    }
}