import { BaseQueryAssessTaskListResponseData } from './BaseQueryAssessTaskListResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssessTaskResponse extends SdkResponse {
    public data?: BaseQueryAssessTaskListResponseData;
    public constructor() { 
        super();
    }
    public withData(data: BaseQueryAssessTaskListResponseData): ListAssessTaskResponse {
        this['data'] = data;
        return this;
    }
}