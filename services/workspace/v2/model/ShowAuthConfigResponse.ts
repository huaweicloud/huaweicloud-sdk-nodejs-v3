import { RadiusGatewayConfigInfo } from './RadiusGatewayConfigInfo';
import { ThirdPartyAuthConfig } from './ThirdPartyAuthConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuthConfigResponse extends SdkResponse {
    private 'auth_type'?: string;
    public enable?: boolean;
    private 'radius_gateway_config'?: RadiusGatewayConfigInfo;
    private 'third_party_auth_config'?: Array<ThirdPartyAuthConfig>;
    private 'emergency_login_mode'?: string;
    public constructor() { 
        super();
    }
    public withAuthType(authType: string): ShowAuthConfigResponse {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withEnable(enable: boolean): ShowAuthConfigResponse {
        this['enable'] = enable;
        return this;
    }
    public withRadiusGatewayConfig(radiusGatewayConfig: RadiusGatewayConfigInfo): ShowAuthConfigResponse {
        this['radius_gateway_config'] = radiusGatewayConfig;
        return this;
    }
    public set radiusGatewayConfig(radiusGatewayConfig: RadiusGatewayConfigInfo  | undefined) {
        this['radius_gateway_config'] = radiusGatewayConfig;
    }
    public get radiusGatewayConfig(): RadiusGatewayConfigInfo | undefined {
        return this['radius_gateway_config'];
    }
    public withThirdPartyAuthConfig(thirdPartyAuthConfig: Array<ThirdPartyAuthConfig>): ShowAuthConfigResponse {
        this['third_party_auth_config'] = thirdPartyAuthConfig;
        return this;
    }
    public set thirdPartyAuthConfig(thirdPartyAuthConfig: Array<ThirdPartyAuthConfig>  | undefined) {
        this['third_party_auth_config'] = thirdPartyAuthConfig;
    }
    public get thirdPartyAuthConfig(): Array<ThirdPartyAuthConfig> | undefined {
        return this['third_party_auth_config'];
    }
    public withEmergencyLoginMode(emergencyLoginMode: string): ShowAuthConfigResponse {
        this['emergency_login_mode'] = emergencyLoginMode;
        return this;
    }
    public set emergencyLoginMode(emergencyLoginMode: string  | undefined) {
        this['emergency_login_mode'] = emergencyLoginMode;
    }
    public get emergencyLoginMode(): string | undefined {
        return this['emergency_login_mode'];
    }
}