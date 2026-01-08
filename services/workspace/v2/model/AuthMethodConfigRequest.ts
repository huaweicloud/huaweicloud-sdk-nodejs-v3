import { AuthTypeEnum } from './AuthTypeEnum';
import { RadiusGatewayConfig } from './RadiusGatewayConfig';
import { Saml2AuthConfig } from './Saml2AuthConfig';
import { ThirdPartyAuthConfig } from './ThirdPartyAuthConfig';


export class AuthMethodConfigRequest {
    public id?: string;
    private 'is_multi_domain_authenticate_enabled'?: boolean;
    private 'auth_type'?: AuthTypeEnum;
    private 'radius_gateway_config'?: RadiusGatewayConfig;
    private 'third_party_auth_config'?: ThirdPartyAuthConfig;
    private 'emergency_login_mode'?: string;
    private 'saml2_auth_config'?: Saml2AuthConfig;
    public constructor() { 
    }
    public withId(id: string): AuthMethodConfigRequest {
        this['id'] = id;
        return this;
    }
    public withIsMultiDomainAuthenticateEnabled(isMultiDomainAuthenticateEnabled: boolean): AuthMethodConfigRequest {
        this['is_multi_domain_authenticate_enabled'] = isMultiDomainAuthenticateEnabled;
        return this;
    }
    public set isMultiDomainAuthenticateEnabled(isMultiDomainAuthenticateEnabled: boolean  | undefined) {
        this['is_multi_domain_authenticate_enabled'] = isMultiDomainAuthenticateEnabled;
    }
    public get isMultiDomainAuthenticateEnabled(): boolean | undefined {
        return this['is_multi_domain_authenticate_enabled'];
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
    public withSaml2AuthConfig(saml2AuthConfig: Saml2AuthConfig): AuthMethodConfigRequest {
        this['saml2_auth_config'] = saml2AuthConfig;
        return this;
    }
    public set saml2AuthConfig(saml2AuthConfig: Saml2AuthConfig  | undefined) {
        this['saml2_auth_config'] = saml2AuthConfig;
    }
    public get saml2AuthConfig(): Saml2AuthConfig | undefined {
        return this['saml2_auth_config'];
    }
}