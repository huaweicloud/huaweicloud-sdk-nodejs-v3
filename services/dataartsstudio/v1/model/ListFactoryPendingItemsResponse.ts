import { ListFactoryPendingItemsRespData } from './ListFactoryPendingItemsRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactoryPendingItemsResponse extends SdkResponse {
    public data?: Array<ListFactoryPendingItemsRespData>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<ListFactoryPendingItemsRespData>): ListFactoryPendingItemsResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListFactoryPendingItemsResponse {
        this['total'] = total;
        return this;
    }
}