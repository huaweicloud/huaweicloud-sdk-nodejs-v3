

export class ItMqttConnectionInfo {
    public username?: string;
    public password?: string;
    private 'trust_certs'?: object;
    private 'verify_hostname'?: boolean;
    public constructor(username?: string, password?: string) { 
        this['username'] = username;
        this['password'] = password;
    }
    public withUsername(username: string): ItMqttConnectionInfo {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): ItMqttConnectionInfo {
        this['password'] = password;
        return this;
    }
    public withTrustCerts(trustCerts: object): ItMqttConnectionInfo {
        this['trust_certs'] = trustCerts;
        return this;
    }
    public set trustCerts(trustCerts: object  | undefined) {
        this['trust_certs'] = trustCerts;
    }
    public get trustCerts(): object | undefined {
        return this['trust_certs'];
    }
    public withVerifyHostname(verifyHostname: boolean): ItMqttConnectionInfo {
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