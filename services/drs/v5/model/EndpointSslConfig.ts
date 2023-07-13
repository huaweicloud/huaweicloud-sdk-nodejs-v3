

export class EndpointSslConfig {
    private 'ssl_link'?: boolean | undefined;
    private 'ssl_cert_name'?: string | undefined;
    private 'ssl_cert_key'?: string | undefined;
    private 'ssl_cert_check_sum'?: string | undefined;
    private 'ssl_cert_password'?: string | undefined;
    public constructor() { 
    }
    public withSslLink(sslLink: boolean): EndpointSslConfig {
        this['ssl_link'] = sslLink;
        return this;
    }
    public set sslLink(sslLink: boolean | undefined) {
        this['ssl_link'] = sslLink;
    }
    public get sslLink() {
        return this['ssl_link'];
    }
    public withSslCertName(sslCertName: string): EndpointSslConfig {
        this['ssl_cert_name'] = sslCertName;
        return this;
    }
    public set sslCertName(sslCertName: string | undefined) {
        this['ssl_cert_name'] = sslCertName;
    }
    public get sslCertName() {
        return this['ssl_cert_name'];
    }
    public withSslCertKey(sslCertKey: string): EndpointSslConfig {
        this['ssl_cert_key'] = sslCertKey;
        return this;
    }
    public set sslCertKey(sslCertKey: string | undefined) {
        this['ssl_cert_key'] = sslCertKey;
    }
    public get sslCertKey() {
        return this['ssl_cert_key'];
    }
    public withSslCertCheckSum(sslCertCheckSum: string): EndpointSslConfig {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
        return this;
    }
    public set sslCertCheckSum(sslCertCheckSum: string | undefined) {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
    }
    public get sslCertCheckSum() {
        return this['ssl_cert_check_sum'];
    }
    public withSslCertPassword(sslCertPassword: string): EndpointSslConfig {
        this['ssl_cert_password'] = sslCertPassword;
        return this;
    }
    public set sslCertPassword(sslCertPassword: string | undefined) {
        this['ssl_cert_password'] = sslCertPassword;
    }
    public get sslCertPassword() {
        return this['ssl_cert_password'];
    }
}