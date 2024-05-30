import { ListDimensionGroupsResultData } from './ListDimensionGroupsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDimensionGroupsResponse extends SdkResponse {
    public data?: ListDimensionGroupsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListDimensionGroupsResultData): ListDimensionGroupsResponse {
        this['data'] = data;
        return this;
    }
}