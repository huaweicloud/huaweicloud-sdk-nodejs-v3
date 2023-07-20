import { OpenIdConnectConfig } from './OpenIdConnectConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOpenIdConnectConfigResponse extends SdkResponse {
    private 'openid_connect_config'?: OpenIdConnectConfig;
    public constructor() { 
        super();
    }
    public withOpenidConnectConfig(openidConnectConfig: OpenIdConnectConfig): ShowOpenIdConnectConfigResponse {
        this['openid_connect_config'] = openidConnectConfig;
        return this;
    }
    public set openidConnectConfig(openidConnectConfig: OpenIdConnectConfig  | undefined) {
        this['openid_connect_config'] = openidConnectConfig;
    }
    public get openidConnectConfig(): OpenIdConnectConfig | undefined {
        return this['openid_connect_config'];
    }
}