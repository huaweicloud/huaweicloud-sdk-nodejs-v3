

export class InfluxDB2ConnectionInfo {
    public token?: string;
    private 'trust_certs'?: object;
    private 'verify_hostname'?: boolean;
    public constructor(token?: string) { 
        this['token'] = token;
    }
    public withToken(token: string): InfluxDB2ConnectionInfo {
        this['token'] = token;
        return this;
    }
    public withTrustCerts(trustCerts: object): InfluxDB2ConnectionInfo {
        this['trust_certs'] = trustCerts;
        return this;
    }
    public set trustCerts(trustCerts: object  | undefined) {
        this['trust_certs'] = trustCerts;
    }
    public get trustCerts(): object | undefined {
        return this['trust_certs'];
    }
    public withVerifyHostname(verifyHostname: boolean): InfluxDB2ConnectionInfo {
        this['verify_hostname'] = verifyHostname;
        return this;
    }
    public set verifyHostname(verifyHostname: boolean  | undefined) {
        this['verify_hostname'] = verifyHostname;
    }
    public get verifyHostname(): boolean | undefined {
        return this['verify_hostname'];
    }
}