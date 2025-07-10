import { AuthAssistEnum } from './AuthAssistEnum';
import { OtpConfigInfo } from './OtpConfigInfo';


export class AssistAuthMethodConfigRequest {
    private 'auth_type'?: AuthAssistEnum;
    private 'otp_config_info'?: OtpConfigInfo;
    public constructor() { 
    }
    public withAuthType(authType: AuthAssistEnum): AssistAuthMethodConfigRequest {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: AuthAssistEnum  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): AuthAssistEnum | undefined {
        return this['auth_type'];
    }
    public withOtpConfigInfo(otpConfigInfo: OtpConfigInfo): AssistAuthMethodConfigRequest {
        this['otp_config_info'] = otpConfigInfo;
        return this;
    }
    public set otpConfigInfo(otpConfigInfo: OtpConfigInfo  | undefined) {
        this['otp_config_info'] = otpConfigInfo;
    }
    public get otpConfigInfo(): OtpConfigInfo | undefined {
        return this['otp_config_info'];
    }
}