

export class AuthInfo {
    private 'client-certificate-data'?: string;
    private 'client-key-data'?: string;
    public token?: string;
    public constructor() { 
    }
    public withClientCertificateData(clientCertificateData: string): AuthInfo {
        this['client-certificate-data'] = clientCertificateData;
        return this;
    }
    public set clientCertificateData(clientCertificateData: string  | undefined) {
        this['client-certificate-data'] = clientCertificateData;
    }
    public get clientCertificateData(): string | undefined {
        return this['client-certificate-data'];
    }
    public withClientKeyData(clientKeyData: string): AuthInfo {
        this['client-key-data'] = clientKeyData;
        return this;
    }
    public set clientKeyData(clientKeyData: string  | undefined) {
        this['client-key-data'] = clientKeyData;
    }
    public get clientKeyData(): string | undefined {
        return this['client-key-data'];
    }
    public withToken(token: string): AuthInfo {
        this['token'] = token;
        return this;
    }
}