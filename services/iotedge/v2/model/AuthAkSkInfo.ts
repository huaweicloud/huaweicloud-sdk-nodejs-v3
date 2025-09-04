

export class AuthAkSkInfo {
    public secret?: string;
    public constructor() { 
    }
    public withSecret(secret: string): AuthAkSkInfo {
        this['secret'] = secret;
        return this;
    }
}