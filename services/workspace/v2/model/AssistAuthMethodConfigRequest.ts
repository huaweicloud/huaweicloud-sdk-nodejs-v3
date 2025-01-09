import { AuthAssistEnum } from './AuthAssistEnum';
import { OtpConfigInfo } from './OtpConfigInfo';
import { RadiusAuthConfig } from './RadiusAuthConfig';
import { RadiusGatewayConfig } from './RadiusGatewayConfig';


export class AssistAuthMethodConfigRequest {
    private 'auth_type'?: AuthAssistEnum;
    private 'otp_config_info'?: OtpConfigInfo;
    private 'radius_auth_config'?: RadiusAuthConfig;
    private 'radius_gateway_config'?: RadiusGatewayConfig;
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
    public withRadiusAuthConfig(radiusAuthConfig: RadiusAuthConfig): AssistAuthMethodConfigRequest {
        this['radius_auth_config'] = radiusAuthConfig;
        return this;
    }
    public set radiusAuthConfig(radiusAuthConfig: RadiusAuthConfig  | undefined) {
        this['radius_auth_config'] = radiusAuthConfig;
    }
    public get radiusAuthConfig(): RadiusAuthConfig | undefined {
        return this['radius_auth_config'];
    }
    public withRadiusGatewayConfig(radiusGatewayConfig: RadiusGatewayConfig): AssistAuthMethodConfigRequest {
        this['radius_gateway_config'] = radiusGatewayConfig;
        return this;
    }
    public set radiusGatewayConfig(radiusGatewayConfig: RadiusGatewayConfig  | undefined) {
        this['radius_gateway_config'] = radiusGatewayConfig;
    }
    public get radiusGatewayConfig(): RadiusGatewayConfig | undefined {
        return this['radius_gateway_config'];
    }
}