

export class SPOIDCConfig {
    private 'redirect_url'?: string;
    public constructor(redirectUrl?: string) { 
        this['redirect_url'] = redirectUrl;
    }
    public withRedirectUrl(redirectUrl: string): SPOIDCConfig {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string  | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl(): string | undefined {
        return this['redirect_url'];
    }
}