import { OtpConfigInfo } from './OtpConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssistAuthConfigResponse extends SdkResponse {
    private 'otp_config_info'?: OtpConfigInfo;
    private 'main_auth_config_id'?: string;
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
    public withMainAuthConfigId(mainAuthConfigId: string): ShowAssistAuthConfigResponse {
        this['main_auth_config_id'] = mainAuthConfigId;
        return this;
    }
    public set mainAuthConfigId(mainAuthConfigId: string  | undefined) {
        this['main_auth_config_id'] = mainAuthConfigId;
    }
    public get mainAuthConfigId(): string | undefined {
        return this['main_auth_config_id'];
    }
}