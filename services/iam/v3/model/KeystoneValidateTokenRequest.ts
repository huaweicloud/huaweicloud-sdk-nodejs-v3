

export class KeystoneValidateTokenRequest {
    private 'X-Subject-Token'?: string;
    public nocatalog?: string;
    public constructor(xSubjectToken?: string) { 
        this['X-Subject-Token'] = xSubjectToken;
    }
    public withXSubjectToken(xSubjectToken: string): KeystoneValidateTokenRequest {
        this['X-Subject-Token'] = xSubjectToken;
        return this;
    }
    public set xSubjectToken(xSubjectToken: string  | undefined) {
        this['X-Subject-Token'] = xSubjectToken;
    }
    public get xSubjectToken(): string | undefined {
        return this['X-Subject-Token'];
    }
    public withNocatalog(nocatalog: string): KeystoneValidateTokenRequest {
        this['nocatalog'] = nocatalog;
        return this;
    }
}