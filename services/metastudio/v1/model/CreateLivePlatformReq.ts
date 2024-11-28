import { CustomPlatformAuthConfig } from './CustomPlatformAuthConfig';
import { StandardPlatformApiConfig } from './StandardPlatformApiConfig';


export class CreateLivePlatformReq {
    public name?: string;
    private 'auth_config'?: CustomPlatformAuthConfig;
    private 'callback_config'?: Array<StandardPlatformApiConfig>;
    public constructor(name?: string, authConfig?: CustomPlatformAuthConfig, callbackConfig?: Array<StandardPlatformApiConfig>) { 
        this['name'] = name;
        this['auth_config'] = authConfig;
        this['callback_config'] = callbackConfig;
    }
    public withName(name: string): CreateLivePlatformReq {
        this['name'] = name;
        return this;
    }
    public withAuthConfig(authConfig: CustomPlatformAuthConfig): CreateLivePlatformReq {
        this['auth_config'] = authConfig;
        return this;
    }
    public set authConfig(authConfig: CustomPlatformAuthConfig  | undefined) {
        this['auth_config'] = authConfig;
    }
    public get authConfig(): CustomPlatformAuthConfig | undefined {
        return this['auth_config'];
    }
    public withCallbackConfig(callbackConfig: Array<StandardPlatformApiConfig>): CreateLivePlatformReq {
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