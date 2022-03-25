

export class AuthInfo {
    public auth: string;
    public constructor(auth?: any) { 
        this['auth'] = auth;
    }
    public withAuth(auth: string): AuthInfo {
        this['auth'] = auth;
        return this;
    }
}