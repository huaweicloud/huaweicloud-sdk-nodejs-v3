

export class User {
    private 'client-certificate-data'?: string | undefined;
    private 'client-key-data'?: string | undefined;
    public constructor() { 
    }
    public withClientCertificateData(clientCertificateData: string): User {
        this['client-certificate-data'] = clientCertificateData;
        return this;
    }
    public set clientCertificateData(clientCertificateData: string | undefined) {
        this['client-certificate-data'] = clientCertificateData;
    }
    public get clientCertificateData() {
        return this['client-certificate-data'];
    }
    public withClientKeyData(clientKeyData: string): User {
        this['client-key-data'] = clientKeyData;
        return this;
    }
    public set clientKeyData(clientKeyData: string | undefined) {
        this['client-key-data'] = clientKeyData;
    }
    public get clientKeyData() {
        return this['client-key-data'];
    }
}