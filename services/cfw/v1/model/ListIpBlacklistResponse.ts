import { PageDataIpBlacklistsVo } from './PageDataIpBlacklistsVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpBlacklistResponse extends SdkResponse {
    public data?: PageDataIpBlacklistsVo;
    public constructor() { 
        super();
    }
    public withData(data: PageDataIpBlacklistsVo): ListIpBlacklistResponse {
        this['data'] = data;
        return this;
    }
}