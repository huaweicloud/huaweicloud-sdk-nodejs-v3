

export class MicrosoftOauth2ProviderConfigInput {
    private 'client_id'?: string;
    private 'client_secret'?: string;
    private 'tenant_id'?: string;
    public constructor(clientId?: string, clientSecret?: string, tenantId?: string) { 
        this['client_id'] = clientId;
        this['client_secret'] = clientSecret;
        this['tenant_id'] = tenantId;
    }
    public withClientId(clientId: string): MicrosoftOauth2ProviderConfigInput {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withClientSecret(clientSecret: string): MicrosoftOauth2ProviderConfigInput {
        this['client_secret'] = clientSecret;
        return this;
    }
    public set clientSecret(clientSecret: string  | undefined) {
        this['client_secret'] = clientSecret;
    }
    public get clientSecret(): string | undefined {
        return this['client_secret'];
    }
    public withTenantId(tenantId: string): MicrosoftOauth2ProviderConfigInput {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
}