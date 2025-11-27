

export class SecretInfo {
    public authMode?: string;
    public secret?: object;
    public constructor() { 
    }
    public withAuthMode(authMode: string): SecretInfo {
        this['authMode'] = authMode;
        return this;
    }
    public withSecret(secret: object): SecretInfo {
        this['secret'] = secret;
        return this;
    }
}