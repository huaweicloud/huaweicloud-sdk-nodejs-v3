

export class AuthInfo {
    public auth?: string;
    public constructor(auth?: string) { 
        this['auth'] = auth;
    }
    public withAuth(auth: string): AuthInfo {
        this['auth'] = auth;
        return this;
    }
}