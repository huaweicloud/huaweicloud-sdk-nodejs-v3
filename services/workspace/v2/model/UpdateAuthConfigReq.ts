import { LoginCaptchaConfig } from './LoginCaptchaConfig';


export class UpdateAuthConfigReq {
    private 'sms_login_enabled'?: boolean;
    private 'login_captcha'?: LoginCaptchaConfig;
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
    public withLoginCaptcha(loginCaptcha: LoginCaptchaConfig): UpdateAuthConfigReq {
        this['login_captcha'] = loginCaptcha;
        return this;
    }
    public set loginCaptcha(loginCaptcha: LoginCaptchaConfig  | undefined) {
        this['login_captcha'] = loginCaptcha;
    }
    public get loginCaptcha(): LoginCaptchaConfig | undefined {
        return this['login_captcha'];
    }
}