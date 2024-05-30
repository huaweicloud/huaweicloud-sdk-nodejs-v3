import { ShowConditionByIdResultData } from './ShowConditionByIdResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConditionByIdResponse extends SdkResponse {
    public data?: ShowConditionByIdResultData;
    public constructor() { 
        super();
    }
    public withData(data: ShowConditionByIdResultData): ShowConditionByIdResponse {
        this['data'] = data;
        return this;
    }
}