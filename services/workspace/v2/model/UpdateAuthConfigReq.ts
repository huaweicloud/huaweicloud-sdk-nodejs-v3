

export class UpdateAuthConfigReq {
    private 'sms_login_enabled'?: boolean;
    public constructor() { 
    }
    public withSmsLoginEnabled(smsLoginEnabled: boolean): UpdateAuthConfigReq {
        this['sms_login_enabled'] = smsLoginEnabled;
        return this;
    }
    public set smsLoginEnabled(smsLoginEnabled: boolean  | undefined) {
        this['sms_login_enabled'] = smsLoginEnabled;
    }
    public get smsLoginEnabled(): boolean | undefined {
        return this['sms_login_enabled'];
    }
}