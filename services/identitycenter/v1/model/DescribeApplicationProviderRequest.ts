

export class DescribeApplicationProviderRequest {
    private 'application_provider_id'?: string;
    private 'X-Security-Token'?: string;
    public constructor(applicationProviderId?: string) { 
        this['application_provider_id'] = applicationProviderId;
    }
    public withApplicationProviderId(applicationProviderId: string): DescribeApplicationProviderRequest {
        this['application_provider_id'] = applicationProviderId;
        return this;
    }
    public set applicationProviderId(applicationProviderId: string  | undefined) {
        this['application_provider_id'] = applicationProviderId;
    }
    public get applicationProviderId(): string | undefined {
        return this['application_provider_id'];
    }
    public withXSecurityToken(xSecurityToken: string): DescribeApplicationProviderRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
}