

export class CreateSpecCert {
    public crt?: string;
    public key?: string;
    public constructor(crt?: string, key?: string) { 
        this['crt'] = crt;
        this['key'] = key;
    }
    public withCrt(crt: string): CreateSpecCert {
        this['crt'] = crt;
        return this;
    }
    public withKey(key: string): CreateSpecCert {
        this['key'] = key;
        return this;
    }
}