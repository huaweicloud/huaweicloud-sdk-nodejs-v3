import { ListDimensionsResultData } from './ListDimensionsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDimensionsResponse extends SdkResponse {
    public data?: ListDimensionsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListDimensionsResultData): ListDimensionsResponse {
        this['data'] = data;
        return this;
    }
}