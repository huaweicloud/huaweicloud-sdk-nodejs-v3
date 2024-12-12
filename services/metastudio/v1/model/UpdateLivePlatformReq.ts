import { StandardPlatformApiConfig } from './StandardPlatformApiConfig';
import { UpdateCustomPlatformAuthConfig } from './UpdateCustomPlatformAuthConfig';


export class UpdateLivePlatformReq {
    public name?: string;
    private 'auth_config'?: UpdateCustomPlatformAuthConfig;
    private 'callback_config'?: Array<StandardPlatformApiConfig>;
    public constructor(name?: string, callbackConfig?: Array<StandardPlatformApiConfig>) { 
        this['name'] = name;
        this['callback_config'] = callbackConfig;
    }
    public withName(name: string): UpdateLivePlatformReq {
        this['name'] = name;
        return this;
    }
    public withAuthConfig(authConfig: UpdateCustomPlatformAuthConfig): UpdateLivePlatformReq {
        this['auth_config'] = authConfig;
        return this;
    }
    public set authConfig(authConfig: UpdateCustomPlatformAuthConfig  | undefined) {
        this['auth_config'] = authConfig;
    }
    public get authConfig(): UpdateCustomPlatformAuthConfig | undefined {
        return this['auth_config'];
    }
    public withCallbackConfig(callbackConfig: Array<StandardPlatformApiConfig>): UpdateLivePlatformReq {
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