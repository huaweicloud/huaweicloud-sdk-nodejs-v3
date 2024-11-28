import { AccessTypeEnum } from './AccessTypeEnum';
import { CustomPlatformAuthConfig } from './CustomPlatformAuthConfig';
import { PlatformAuthorizationInfo } from './PlatformAuthorizationInfo';
import { StandardPlatformApiConfig } from './StandardPlatformApiConfig';


export class LivePlatformInfo {
    private 'platform_id'?: string;
    private 'access_type'?: AccessTypeEnum;
    public name?: string;
    private 'authorization_info'?: PlatformAuthorizationInfo;
    private 'auth_config'?: CustomPlatformAuthConfig;
    private 'callback_config'?: Array<StandardPlatformApiConfig>;
    public constructor() { 
    }
    public withPlatformId(platformId: string): LivePlatformInfo {
        this['platform_id'] = platformId;
        return this;
    }
    public set platformId(platformId: string  | undefined) {
        this['platform_id'] = platformId;
    }
    public get platformId(): string | undefined {
        return this['platform_id'];
    }
    public withAccessType(accessType: AccessTypeEnum): LivePlatformInfo {
        this['access_type'] = accessType;
        return this;
    }
    public set accessType(accessType: AccessTypeEnum  | undefined) {
        this['access_type'] = accessType;
    }
    public get accessType(): AccessTypeEnum | undefined {
        return this['access_type'];
    }
    public withName(name: string): LivePlatformInfo {
        this['name'] = name;
        return this;
    }
    public withAuthorizationInfo(authorizationInfo: PlatformAuthorizationInfo): LivePlatformInfo {
        this['authorization_info'] = authorizationInfo;
        return this;
    }
    public set authorizationInfo(authorizationInfo: PlatformAuthorizationInfo  | undefined) {
        this['authorization_info'] = authorizationInfo;
    }
    public get authorizationInfo(): PlatformAuthorizationInfo | undefined {
        return this['authorization_info'];
    }
    public withAuthConfig(authConfig: CustomPlatformAuthConfig): LivePlatformInfo {
        this['auth_config'] = authConfig;
        return this;
    }
    public set authConfig(authConfig: CustomPlatformAuthConfig  | undefined) {
        this['auth_config'] = authConfig;
    }
    public get authConfig(): CustomPlatformAuthConfig | undefined {
        return this['auth_config'];
    }
    public withCallbackConfig(callbackConfig: Array<StandardPlatformApiConfig>): LivePlatformInfo {
        this['callback_config'] = callbackConfig;
        return this;
    }
    public set callbackConfig(callbackConfig: Array<StandardPlatformApiConfig>  | undefined) {
        this['callback_config'] = callbackConfig;
    }
    public get callbackConfig(): Array<StandardPlatformApiConfig> | undefined {
        return this['callback_config'];
    }
}