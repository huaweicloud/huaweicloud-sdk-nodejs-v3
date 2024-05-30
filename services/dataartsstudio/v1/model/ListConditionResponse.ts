import { ListConditionResultData } from './ListConditionResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConditionResponse extends SdkResponse {
    public data?: ListConditionResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListConditionResultData): ListConditionResponse {
        this['data'] = data;
        return this;
    }
}