

export class SwitchSslOpenRequest {
    private 'ssl_enabled'?: boolean;
    public constructor(sslEnabled?: boolean) { 
        this['ssl_enabled'] = sslEnabled;
    }
    public withSslEnabled(sslEnabled: boolean): SwitchSslOpenRequest {
        this['ssl_enabled'] = sslEnabled;
        return this;
    }
    public set sslEnabled(sslEnabled: boolean  | undefined) {
        this['ssl_enabled'] = sslEnabled;
    }
    public get sslEnabled(): boolean | undefined {
        return this['ssl_enabled'];
    }
}