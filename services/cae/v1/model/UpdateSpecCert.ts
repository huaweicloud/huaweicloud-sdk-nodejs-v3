

export class UpdateSpecCert {
    public crt?: string;
    public key?: string;
    public constructor(crt?: string, key?: string) { 
        this['crt'] = crt;
        this['key'] = key;
    }
    public withCrt(crt: string): UpdateSpecCert {
        this['crt'] = crt;
        return this;
    }
    public withKey(key: string): UpdateSpecCert {
        this['key'] = key;
        return this;
    }
}