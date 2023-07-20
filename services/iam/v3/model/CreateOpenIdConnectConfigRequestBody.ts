import { CreateOpenIdConnectConfig } from './CreateOpenIdConnectConfig';


export class CreateOpenIdConnectConfigRequestBody {
    private 'openid_connect_config'?: CreateOpenIdConnectConfig;
    public constructor(openidConnectConfig?: CreateOpenIdConnectConfig) { 
        this['openid_connect_config'] = openidConnectConfig;
    }
    public withOpenidConnectConfig(openidConnectConfig: CreateOpenIdConnectConfig): CreateOpenIdConnectConfigRequestBody {
        this['openid_connect_config'] = openidConnectConfig;
        return this;
    }
    public set openidConnectConfig(openidConnectConfig: CreateOpenIdConnectConfig  | undefined) {
        this['openid_connect_config'] = openidConnectConfig;
    }
    public get openidConnectConfig(): CreateOpenIdConnectConfig | undefined {
        return this['openid_connect_config'];
    }
}