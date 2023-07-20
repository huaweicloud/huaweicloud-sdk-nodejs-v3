

export class EndpointSslConfig {
    private 'ssl_link'?: boolean;
    private 'ssl_cert_name'?: string;
    private 'ssl_cert_key'?: string;
    private 'ssl_cert_check_sum'?: string;
    private 'ssl_cert_password'?: string;
    public constructor() { 
    }
    public withSslLink(sslLink: boolean): EndpointSslConfig {
        this['ssl_link'] = sslLink;
        return this;
    }
    public set sslLink(sslLink: boolean  | undefined) {
        this['ssl_link'] = sslLink;
    }
    public get sslLink(): boolean | undefined {
        return this['ssl_link'];
    }
    public withSslCertName(sslCertName: string): EndpointSslConfig {
        this['ssl_cert_name'] = sslCertName;
        return this;
    }
    public set sslCertName(sslCertName: string  | undefined) {
        this['ssl_cert_name'] = sslCertName;
    }
    public get sslCertName(): string | undefined {
        return this['ssl_cert_name'];
    }
    public withSslCertKey(sslCertKey: string): EndpointSslConfig {
        this['ssl_cert_key'] = sslCertKey;
        return this;
    }
    public set sslCertKey(sslCertKey: string  | undefined) {
        this['ssl_cert_key'] = sslCertKey;
    }
    public get sslCertKey(): string | undefined {
        return this['ssl_cert_key'];
    }
    public withSslCertCheckSum(sslCertCheckSum: string): EndpointSslConfig {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
        return this;
    }
    public set sslCertCheckSum(sslCertCheckSum: string  | undefined) {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
    }
    public get sslCertCheckSum(): string | undefined {
        return this['ssl_cert_check_sum'];
    }
    public withSslCertPassword(sslCertPassword: string): EndpointSslConfig {
        this['ssl_cert_password'] = sslCertPassword;
        return this;
    }
    public set sslCertPassword(sslCertPassword: string  | undefined) {
        this['ssl_cert_password'] = sslCertPassword;
    }
    public get sslCertPassword(): string | undefined {
        return this['ssl_cert_password'];
    }
}