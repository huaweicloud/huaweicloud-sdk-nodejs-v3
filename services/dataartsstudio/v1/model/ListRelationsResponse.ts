import { ListRelationsResultData } from './ListRelationsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRelationsResponse extends SdkResponse {
    public data?: ListRelationsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListRelationsResultData): ListRelationsResponse {
        this['data'] = data;
        return this;
    }
}