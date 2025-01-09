import { AuthTypeEnum } from './AuthTypeEnum';
import { RadiusGatewayConfig } from './RadiusGatewayConfig';
import { ThirdPartyAuthConfig } from './ThirdPartyAuthConfig';


export class AuthMethodConfigRequest {
    private 'auth_type'?: AuthTypeEnum;
    private 'radius_gateway_config'?: RadiusGatewayConfig;
    private 'third_party_auth_config'?: ThirdPartyAuthConfig;
    private 'emergency_login_mode'?: string;
    public constructor() { 
    }
    public withAuthType(authType: AuthTypeEnum): AuthMethodConfigRequest {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: AuthTypeEnum  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): AuthTypeEnum | undefined {
        return this['auth_type'];
    }
    public withRadiusGatewayConfig(radiusGatewayConfig: RadiusGatewayConfig): AuthMethodConfigRequest {
        this['radius_gateway_config'] = radiusGatewayConfig;
        return this;
    }
    public set radiusGatewayConfig(radiusGatewayConfig: RadiusGatewayConfig  | undefined) {
        this['radius_gateway_config'] = radiusGatewayConfig;
    }
    public get radiusGatewayConfig(): RadiusGatewayConfig | undefined {
        return this['radius_gateway_config'];
    }
    public withThirdPartyAuthConfig(thirdPartyAuthConfig: ThirdPartyAuthConfig): AuthMethodConfigRequest {
        this['third_party_auth_config'] = thirdPartyAuthConfig;
        return this;
    }
    public set thirdPartyAuthConfig(thirdPartyAuthConfig: ThirdPartyAuthConfig  | undefined) {
        this['third_party_auth_config'] = thirdPartyAuthConfig;
    }
    public get thirdPartyAuthConfig(): ThirdPartyAuthConfig | undefined {
        return this['third_party_auth_config'];
    }
    public withEmergencyLoginMode(emergencyLoginMode: string): AuthMethodConfigRequest {
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