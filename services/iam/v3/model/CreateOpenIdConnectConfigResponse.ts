import { CreateOpenIdConnectConfig } from './CreateOpenIdConnectConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOpenIdConnectConfigResponse extends SdkResponse {
    private 'openid_connect_config'?: CreateOpenIdConnectConfig;
    public constructor() { 
        super();
    }
    public withOpenidConnectConfig(openidConnectConfig: CreateOpenIdConnectConfig): CreateOpenIdConnectConfigResponse {
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