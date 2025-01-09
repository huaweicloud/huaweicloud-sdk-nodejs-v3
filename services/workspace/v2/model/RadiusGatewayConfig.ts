

export class RadiusGatewayConfig {
    public enable?: boolean;
    private 'app_id'?: string;
    public password?: string;
    private 'token_url'?: string;
    private 'verification_cipher_url'?: string;
    private 'cert_content'?: string;
    public constructor() { 
    }
    public withEnable(enable: boolean): RadiusGatewayConfig {
        this['enable'] = enable;
        return this;
    }
    public withAppId(appId: string): RadiusGatewayConfig {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withPassword(password: string): RadiusGatewayConfig {
        this['password'] = password;
        return this;
    }
    public withTokenUrl(tokenUrl: string): RadiusGatewayConfig {
        this['token_url'] = tokenUrl;
        return this;
    }
    public set tokenUrl(tokenUrl: string  | undefined) {
        this['token_url'] = tokenUrl;
    }
    public get tokenUrl(): string | undefined {
        return this['token_url'];
    }
    public withVerificationCipherUrl(verificationCipherUrl: string): RadiusGatewayConfig {
        this['verification_cipher_url'] = verificationCipherUrl;
        return this;
    }
    public set verificationCipherUrl(verificationCipherUrl: string  | undefined) {
        this['verification_cipher_url'] = verificationCipherUrl;
    }
    public get verificationCipherUrl(): string | undefined {
        return this['verification_cipher_url'];
    }
    public withCertContent(certContent: string): RadiusGatewayConfig {
        this['cert_content'] = certContent;
        return this;
    }
    public set certContent(certContent: string  | undefined) {
        this['cert_content'] = certContent;
    }
    public get certContent(): string | undefined {
        return this['cert_content'];
    }
}