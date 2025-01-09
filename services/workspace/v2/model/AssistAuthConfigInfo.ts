import { OtpConfigInfo } from './OtpConfigInfo';


export class AssistAuthConfigInfo {
    private 'auth_type'?: string;
    private 'otp_config_info'?: OtpConfigInfo;
    public constructor() { 
    }
    public withAuthType(authType: string): AssistAuthConfigInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withOtpConfigInfo(otpConfigInfo: OtpConfigInfo): AssistAuthConfigInfo {
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