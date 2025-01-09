

export class RadiusGatewayConfigInfo {
    public enable?: boolean;
    private 'app_id'?: string;
    private 'cert_domain_name'?: string;
    private 'token_url'?: string;
    private 'verification_cipher_url'?: string;
    private 'auth_type'?: string;
    private 'assist_auth_type'?: string;
    public expiration?: string;
    public constructor() { 
    }
    public withEnable(enable: boolean): RadiusGatewayConfigInfo {
        this['enable'] = enable;
        return this;
    }
    public withAppId(appId: string): RadiusGatewayConfigInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withCertDomainName(certDomainName: string): RadiusGatewayConfigInfo {
        this['cert_domain_name'] = certDomainName;
        return this;
    }
    public set certDomainName(certDomainName: string  | undefined) {
        this['cert_domain_name'] = certDomainName;
    }
    public get certDomainName(): string | undefined {
        return this['cert_domain_name'];
    }
    public withTokenUrl(tokenUrl: string): RadiusGatewayConfigInfo {
        this['token_url'] = tokenUrl;
        return this;
    }
    public set tokenUrl(tokenUrl: string  | undefined) {
        this['token_url'] = tokenUrl;
    }
    public get tokenUrl(): string | undefined {
        return this['token_url'];
    }
    public withVerificationCipherUrl(verificationCipherUrl: string): RadiusGatewayConfigInfo {
        this['verification_cipher_url'] = verificationCipherUrl;
        return this;
    }
    public set verificationCipherUrl(verificationCipherUrl: string  | undefined) {
        this['verification_cipher_url'] = verificationCipherUrl;
    }
    public get verificationCipherUrl(): string | undefined {
        return this['verification_cipher_url'];
    }
    public withAuthType(authType: string): RadiusGatewayConfigInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withAssistAuthType(assistAuthType: string): RadiusGatewayConfigInfo {
        this['assist_auth_type'] = assistAuthType;
        return this;
    }
    public set assistAuthType(assistAuthType: string  | undefined) {
        this['assist_auth_type'] = assistAuthType;
    }
    public get assistAuthType(): string | undefined {
        return this['assist_auth_type'];
    }
    public withExpiration(expiration: string): RadiusGatewayConfigInfo {
        this['expiration'] = expiration;
        return this;
    }
}