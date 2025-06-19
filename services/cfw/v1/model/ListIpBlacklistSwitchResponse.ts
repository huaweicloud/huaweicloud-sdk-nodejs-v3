import { IpBlacklistSwitchInfoVo } from './IpBlacklistSwitchInfoVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpBlacklistSwitchResponse extends SdkResponse {
    public data?: IpBlacklistSwitchInfoVo;
    public constructor() { 
        super();
    }
    public withData(data: IpBlacklistSwitchInfoVo): ListIpBlacklistSwitchResponse {
        this['data'] = data;
        return this;
    }
}