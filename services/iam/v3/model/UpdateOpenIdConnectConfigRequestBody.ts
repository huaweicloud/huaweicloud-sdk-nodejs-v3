import { UpdateOpenIdConnectConfig } from './UpdateOpenIdConnectConfig';


export class UpdateOpenIdConnectConfigRequestBody {
    private 'openid_connect_config'?: UpdateOpenIdConnectConfig;
    public constructor(openidConnectConfig?: UpdateOpenIdConnectConfig) { 
        this['openid_connect_config'] = openidConnectConfig;
    }
    public withOpenidConnectConfig(openidConnectConfig: UpdateOpenIdConnectConfig): UpdateOpenIdConnectConfigRequestBody {
        this['openid_connect_config'] = openidConnectConfig;
        return this;
    }
    public set openidConnectConfig(openidConnectConfig: UpdateOpenIdConnectConfig  | undefined) {
        this['openid_connect_config'] = openidConnectConfig;
    }
    public get openidConnectConfig(): UpdateOpenIdConnectConfig | undefined {
        return this['openid_connect_config'];
    }
}