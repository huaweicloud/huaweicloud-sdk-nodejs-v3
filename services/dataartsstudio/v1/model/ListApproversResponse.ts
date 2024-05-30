import { ListApproversResultData } from './ListApproversResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApproversResponse extends SdkResponse {
    public data?: ListApproversResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListApproversResultData): ListApproversResponse {
        this['data'] = data;
        return this;
    }
}