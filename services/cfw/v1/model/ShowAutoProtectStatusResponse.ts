import { FirewallStatusVO } from './FirewallStatusVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoProtectStatusResponse extends SdkResponse {
    public data?: FirewallStatusVO;
    public constructor() { 
        super();
    }
    public withData(data: FirewallStatusVO): ShowAutoProtectStatusResponse {
        this['data'] = data;
        return this;
    }
}