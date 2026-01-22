import { ListPrivateNetworkSegmentsVO } from './ListPrivateNetworkSegmentsVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateNetworkSegmentsResponse extends SdkResponse {
    public data?: ListPrivateNetworkSegmentsVO;
    public constructor() { 
        super();
    }
    public withData(data: ListPrivateNetworkSegmentsVO): ListPrivateNetworkSegmentsResponse {
        this['data'] = data;
        return this;
    }
}