

export class MqttNodeChannelConnectionInfoResp {
    private 'client_id'?: string;
    public username?: string;
    private 'trust_certs'?: object;
    private 'verify_hostname'?: boolean;
    public constructor() { 
    }
    public withClientId(clientId: string): MqttNodeChannelConnectionInfoResp {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withUsername(username: string): MqttNodeChannelConnectionInfoResp {
        this['username'] = username;
        return this;
    }
    public withTrustCerts(trustCerts: object): MqttNodeChannelConnectionInfoResp {
        this['trust_certs'] = trustCerts;
        return this;
    }
    public set trustCerts(trustCerts: object  | undefined) {
        this['trust_certs'] = trustCerts;
    }
    public get trustCerts(): object | undefined {
        return this['trust_certs'];
    }
    public withVerifyHostname(verifyHostname: boolean): MqttNodeChannelConnectionInfoResp {
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