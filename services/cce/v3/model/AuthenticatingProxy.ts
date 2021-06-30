

export class AuthenticatingProxy {
    public ca?: string;
    public cert?: string;
    public privateKey?: string;
    public constructor() { 
    }
    public withCa(ca: string): AuthenticatingProxy {
        this['ca'] = ca;
        return this;
    }
    public withCert(cert: string): AuthenticatingProxy {
        this['cert'] = cert;
        return this;
    }
    public withPrivateKey(privateKey: string): AuthenticatingProxy {
        this['privateKey'] = privateKey;
        return this;
    }
}