import { ListIpsWhiteListsVO } from './ListIpsWhiteListsVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpsWhitelistsResponse extends SdkResponse {
    public data?: ListIpsWhiteListsVO;
    public constructor() { 
        super();
    }
    public withData(data: ListIpsWhiteListsVO): ListIpsWhitelistsResponse {
        this['data'] = data;
        return this;
    }
}