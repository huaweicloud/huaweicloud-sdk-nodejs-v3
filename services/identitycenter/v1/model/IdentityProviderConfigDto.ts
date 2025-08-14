

export class IdentityProviderConfigDto {
    private 'issuer_url'?: string;
    private 'metadata_url'?: string;
    private 'remote_login_url'?: string;
    private 'remote_logout_url'?: string;
    public constructor(issuerUrl?: string, metadataUrl?: string, remoteLoginUrl?: string, remoteLogoutUrl?: string) { 
        this['issuer_url'] = issuerUrl;
        this['metadata_url'] = metadataUrl;
        this['remote_login_url'] = remoteLoginUrl;
        this['remote_logout_url'] = remoteLogoutUrl;
    }
    public withIssuerUrl(issuerUrl: string): IdentityProviderConfigDto {
        this['issuer_url'] = issuerUrl;
        return this;
    }
    public set issuerUrl(issuerUrl: string  | undefined) {
        this['issuer_url'] = issuerUrl;
    }
    public get issuerUrl(): string | undefined {
        return this['issuer_url'];
    }
    public withMetadataUrl(metadataUrl: string): IdentityProviderConfigDto {
        this['metadata_url'] = metadataUrl;
        return this;
    }
    public set metadataUrl(metadataUrl: string  | undefined) {
        this['metadata_url'] = metadataUrl;
    }
    public get metadataUrl(): string | undefined {
        return this['metadata_url'];
    }
    public withRemoteLoginUrl(remoteLoginUrl: string): IdentityProviderConfigDto {
        this['remote_login_url'] = remoteLoginUrl;
        return this;
    }
    public set remoteLoginUrl(remoteLoginUrl: string  | undefined) {
        this['remote_login_url'] = remoteLoginUrl;
    }
    public get remoteLoginUrl(): string | undefined {
        return this['remote_login_url'];
    }
    public withRemoteLogoutUrl(remoteLogoutUrl: string): IdentityProviderConfigDto {
        this['remote_logout_url'] = remoteLogoutUrl;
        return this;
    }
    public set remoteLogoutUrl(remoteLogoutUrl: string  | undefined) {
        this['remote_logout_url'] = remoteLogoutUrl;
    }
    public get remoteLogoutUrl(): string | undefined {
        return this['remote_logout_url'];
    }
}