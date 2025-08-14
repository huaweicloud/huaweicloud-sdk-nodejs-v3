import { BaseIdResponseData } from './BaseIdResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAssessTaskResponse extends SdkResponse {
    public data?: BaseIdResponseData;
    public constructor() { 
        super();
    }
    public withData(data: BaseIdResponseData): CreateAssessTaskResponse {
        this['data'] = data;
        return this;
    }
}