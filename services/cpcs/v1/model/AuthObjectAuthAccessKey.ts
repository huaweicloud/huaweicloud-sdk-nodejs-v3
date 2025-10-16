

export class AuthObjectAuthAccessKey {
    public id?: string;
    public secret?: string;
    public constructor() { 
    }
    public withId(id: string): AuthObjectAuthAccessKey {
        this['id'] = id;
        return this;
    }
    public withSecret(secret: string): AuthObjectAuthAccessKey {
        this['secret'] = secret;
        return this;
    }
}