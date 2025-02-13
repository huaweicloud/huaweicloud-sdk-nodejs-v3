

export class ResourcesCredential {
    public access?: string;
    public secret?: string;
    public constructor() { 
    }
    public withAccess(access: string): ResourcesCredential {
        this['access'] = access;
        return this;
    }
    public withSecret(secret: string): ResourcesCredential {
        this['secret'] = secret;
        return this;
    }
}