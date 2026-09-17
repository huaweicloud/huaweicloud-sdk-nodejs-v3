

export class UpdateMqttNodeChannelConnectionInfo {
    private 'client_id'?: string;
    public username?: string;
    public password?: string;
    private 'trust_certs'?: object;
    private 'verify_hostname'?: boolean;
    public constructor() { 
    }
    public withClientId(clientId: string): UpdateMqttNodeChannelConnectionInfo {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withUsername(username: string): UpdateMqttNodeChannelConnectionInfo {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): UpdateMqttNodeChannelConnectionInfo {
        this['password'] = password;
        return this;
    }
    public withTrustCerts(trustCerts: object): UpdateMqttNodeChannelConnectionInfo {
        this['trust_certs'] = trustCerts;
        return this;
    }
    public set trustCerts(trustCerts: object  | undefined) {
        this['trust_certs'] = trustCerts;
    }
    public get trustCerts(): object | undefined {
        return this['trust_certs'];
    }
    public withVerifyHostname(verifyHostname: boolean): UpdateMqttNodeChannelConnectionInfo {
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