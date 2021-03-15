import { UpdateOpenIdConnectConfig } from './UpdateOpenIdConnectConfig';


export class UpdateOpenIdConnectConfigRequestBody {
    private 'openid_connect_config': UpdateOpenIdConnectConfig | undefined;
    public constructor(openidConnectConfig: any) { 
        this['openid_connect_config'] = openidConnectConfig;
    }
    public withOpenidConnectConfig(openidConnectConfig: UpdateOpenIdConnectConfig): UpdateOpenIdConnectConfigRequestBody {
        this['openid_connect_config'] = openidConnectConfig;
        return this;
    }
    public set openidConnectConfig(openidConnectConfig: UpdateOpenIdConnectConfig | undefined) {
        this['openid_connect_config'] = openidConnectConfig;
    }
    public get openidConnectConfig() {
        return this['openid_connect_config'];
    }
}