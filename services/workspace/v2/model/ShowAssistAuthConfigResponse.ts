import { OtpConfigInfo } from './OtpConfigInfo';
import { RadiusConfigInfo } from './RadiusConfigInfo';
import { RadiusGatewayConfigInfo } from './RadiusGatewayConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssistAuthConfigResponse extends SdkResponse {
    private 'otp_config_info'?: OtpConfigInfo;
    private 'radius_config_info'?: RadiusConfigInfo;
    private 'radius_gateway_config_info'?: RadiusGatewayConfigInfo;
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
    public withRadiusConfigInfo(radiusConfigInfo: RadiusConfigInfo): ShowAssistAuthConfigResponse {
        this['radius_config_info'] = radiusConfigInfo;
        return this;
    }
    public set radiusConfigInfo(radiusConfigInfo: RadiusConfigInfo  | undefined) {
        this['radius_config_info'] = radiusConfigInfo;
    }
    public get radiusConfigInfo(): RadiusConfigInfo | undefined {
        return this['radius_config_info'];
    }
    public withRadiusGatewayConfigInfo(radiusGatewayConfigInfo: RadiusGatewayConfigInfo): ShowAssistAuthConfigResponse {
        this['radius_gateway_config_info'] = radiusGatewayConfigInfo;
        return this;
    }
    public set radiusGatewayConfigInfo(radiusGatewayConfigInfo: RadiusGatewayConfigInfo  | undefined) {
        this['radius_gateway_config_info'] = radiusGatewayConfigInfo;
    }
    public get radiusGatewayConfigInfo(): RadiusGatewayConfigInfo | undefined {
        return this['radius_gateway_config_info'];
    }
}