

export class MqttConnectionInfoResp {
    public username?: string;
    private 'trust_certs'?: object;
    private 'verify_hostname'?: boolean;
    public constructor() { 
    }
    public withUsername(username: string): MqttConnectionInfoResp {
        this['username'] = username;
        return this;
    }
    public withTrustCerts(trustCerts: object): MqttConnectionInfoResp {
        this['trust_certs'] = trustCerts;
        return this;
    }
    public set trustCerts(trustCerts: object  | undefined) {
        this['trust_certs'] = trustCerts;
    }
    public get trustCerts(): object | undefined {
        return this['trust_certs'];
    }
    public withVerifyHostname(verifyHostname: boolean): MqttConnectionInfoResp {
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