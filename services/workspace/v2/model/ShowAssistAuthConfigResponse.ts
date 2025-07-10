import { OtpConfigInfo } from './OtpConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssistAuthConfigResponse extends SdkResponse {
    private 'otp_config_info'?: OtpConfigInfo;
    public constructor() { 
        super();
    }
    public withOtpConfigInfo(otpConfigInfo: OtpConfigInfo): ShowAssistAuthConfigResponse {
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