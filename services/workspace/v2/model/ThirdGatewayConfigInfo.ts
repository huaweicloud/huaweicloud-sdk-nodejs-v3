

export class ThirdGatewayConfigInfo {
    private 'login_url'?: string;
    private 'logout_url'?: string;
    private 'token_url'?: string;
    private 'verification_cipher_url'?: string;
    private 'cert_content'?: string;
    public constructor(loginUrl?: string, logoutUrl?: string, tokenUrl?: string, verificationCipherUrl?: string, certContent?: string) { 
        this['login_url'] = loginUrl;
        this['logout_url'] = logoutUrl;
        this['token_url'] = tokenUrl;
        this['verification_cipher_url'] = verificationCipherUrl;
        this['cert_content'] = certContent;
    }
    public withLoginUrl(loginUrl: string): ThirdGatewayConfigInfo {
        this['login_url'] = loginUrl;
        return this;
    }
    public set loginUrl(loginUrl: string  | undefined) {
        this['login_url'] = loginUrl;
    }
    public get loginUrl(): string | undefined {
        return this['login_url'];
    }
    public withLogoutUrl(logoutUrl: string): ThirdGatewayConfigInfo {
        this['logout_url'] = logoutUrl;
        return this;
    }
    public set logoutUrl(logoutUrl: string  | undefined) {
        this['logout_url'] = logoutUrl;
    }
    public get logoutUrl(): string | undefined {
        return this['logout_url'];
    }
    public withTokenUrl(tokenUrl: string): ThirdGatewayConfigInfo {
        this['token_url'] = tokenUrl;
        return this;
    }
    public set tokenUrl(tokenUrl: string  | undefined) {
        this['token_url'] = tokenUrl;
    }
    public get tokenUrl(): string | undefined {
        return this['token_url'];
    }
    public withVerificationCipherUrl(verificationCipherUrl: string): ThirdGatewayConfigInfo {
        this['verification_cipher_url'] = verificationCipherUrl;
        return this;
    }
    public set verificationCipherUrl(verificationCipherUrl: string  | undefined) {
        this['verification_cipher_url'] = verificationCipherUrl;
    }
    public get verificationCipherUrl(): string | undefined {
        return this['verification_cipher_url'];
    }
    public withCertContent(certContent: string): ThirdGatewayConfigInfo {
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