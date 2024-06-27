import { IdObject } from './IdObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCaptureTaskResponse extends SdkResponse {
    public data?: IdObject;
    public constructor() { 
        super();
    }
    public withData(data: IdObject): CreateCaptureTaskResponse {
        this['data'] = data;
        return this;
    }
}