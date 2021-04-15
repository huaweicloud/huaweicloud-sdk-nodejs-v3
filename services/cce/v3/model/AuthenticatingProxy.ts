

export class AuthenticatingProxy {
    public ca?: string;
    public constructor() { 
    }
    public withCa(ca: string): AuthenticatingProxy {
        this['ca'] = ca;
        return this;
    }
}