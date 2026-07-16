

export class CertificateAuthority {
    public data?: string;
    public constructor() { 
    }
    public withData(data: string): CertificateAuthority {
        this['data'] = data;
        return this;
    }
}