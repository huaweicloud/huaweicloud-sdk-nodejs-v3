

export class SyncExternalUserRequest {
    private 'auth_config_id'?: string;
    private 'domain_id'?: string;
    private 'enterprise_id'?: string;
    public constructor(authConfigId?: string, domainId?: string) { 
        this['auth_config_id'] = authConfigId;
        this['domain_id'] = domainId;
    }
    public withAuthConfigId(authConfigId: string): SyncExternalUserRequest {
        this['auth_config_id'] = authConfigId;
        return this;
    }
    public set authConfigId(authConfigId: string  | undefined) {
        this['auth_config_id'] = authConfigId;
    }
    public get authConfigId(): string | undefined {
        return this['auth_config_id'];
    }
    public withDomainId(domainId: string): SyncExternalUserRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEnterpriseId(enterpriseId: string): SyncExternalUserRequest {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
}