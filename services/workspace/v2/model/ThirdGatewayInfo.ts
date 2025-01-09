

export class ThirdGatewayInfo {
    private 'login_url'?: string;
    private 'logout_url'?: string;
    private 'token_url'?: string;
    private 'verification_cipher_url'?: string;
    private 'cert_content'?: string;
    public constructor() { 
    }
    public withLoginUrl(loginUrl: string): ThirdGatewayInfo {
        this['login_url'] = loginUrl;
        return this;
    }
    public set loginUrl(loginUrl: string  | undefined) {
        this['login_url'] = loginUrl;
    }
    public get loginUrl(): string | undefined {
        return this['login_url'];
    }
    public withLogoutUrl(logoutUrl: string): ThirdGatewayInfo {
        this['logout_url'] = logoutUrl;
        return this;
    }
    public set logoutUrl(logoutUrl: string  | undefined) {
        this['logout_url'] = logoutUrl;
    }
    public get logoutUrl(): string | undefined {
        return this['logout_url'];
    }
    public withTokenUrl(tokenUrl: string): ThirdGatewayInfo {
        this['token_url'] = tokenUrl;
        return this;
    }
    public set tokenUrl(tokenUrl: string  | undefined) {
        this['token_url'] = tokenUrl;
    }
    public get tokenUrl(): string | undefined {
        return this['token_url'];
    }
    public withVerificationCipherUrl(verificationCipherUrl: string): ThirdGatewayInfo {
        this['verification_cipher_url'] = verificationCipherUrl;
        return this;
    }
    public set verificationCipherUrl(verificationCipherUrl: string  | undefined) {
        this['verification_cipher_url'] = verificationCipherUrl;
    }
    public get verificationCipherUrl(): string | undefined {
        return this['verification_cipher_url'];
    }
    public withCertContent(certContent: string): ThirdGatewayInfo {
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