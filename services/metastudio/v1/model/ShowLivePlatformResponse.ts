import { AccessTypeEnum } from './AccessTypeEnum';
import { CustomPlatformAuthConfig } from './CustomPlatformAuthConfig';
import { LivePlatformInfo } from './LivePlatformInfo';
import { PlatformAuthorizationInfo } from './PlatformAuthorizationInfo';
import { StandardPlatformApiConfig } from './StandardPlatformApiConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLivePlatformResponse extends SdkResponse {
    private 'platform_id'?: string;
    private 'access_type'?: AccessTypeEnum;
    public name?: string;
    private 'authorization_info'?: PlatformAuthorizationInfo;
    private 'auth_config'?: CustomPlatformAuthConfig;
    private 'callback_config'?: Array<StandardPlatformApiConfig>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withPlatformId(platformId: string): ShowLivePlatformResponse {
        this['platform_id'] = platformId;
        return this;
    }
    public set platformId(platformId: string  | undefined) {
        this['platform_id'] = platformId;
    }
    public get platformId(): string | undefined {
        return this['platform_id'];
    }
    public withAccessType(accessType: AccessTypeEnum): ShowLivePlatformResponse {
        this['access_type'] = accessType;
        return this;
    }
    public set accessType(accessType: AccessTypeEnum  | undefined) {
        this['access_type'] = accessType;
    }
    public get accessType(): AccessTypeEnum | undefined {
        return this['access_type'];
    }
    public withName(name: string): ShowLivePlatformResponse {
        this['name'] = name;
        return this;
    }
    public withAuthorizationInfo(authorizationInfo: PlatformAuthorizationInfo): ShowLivePlatformResponse {
        this['authorization_info'] = authorizationInfo;
        return this;
    }
    public set authorizationInfo(authorizationInfo: PlatformAuthorizationInfo  | undefined) {
        this['authorization_info'] = authorizationInfo;
    }
    public get authorizationInfo(): PlatformAuthorizationInfo | undefined {
        return this['authorization_info'];
    }
    public withAuthConfig(authConfig: CustomPlatformAuthConfig): ShowLivePlatformResponse {
        this['auth_config'] = authConfig;
        return this;
    }
    public set authConfig(authConfig: CustomPlatformAuthConfig  | undefined) {
        this['auth_config'] = authConfig;
    }
    public get authConfig(): CustomPlatformAuthConfig | undefined {
        return this['auth_config'];
    }
    public withCallbackConfig(callbackConfig: Array<StandardPlatformApiConfig>): ShowLivePlatformResponse {
        this['callback_config'] = callbackConfig;
        return this;
    }
    public set callbackConfig(callbackConfig: Array<StandardPlatformApiConfig>  | undefined) {
        this['callback_config'] = callbackConfig;
    }
    public get callbackConfig(): Array<StandardPlatformApiConfig> | undefined {
        return this['callback_config'];
    }
    public withXRequestId(xRequestId: string): ShowLivePlatformResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}