import { IdObject } from './IdObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCaptureTaskResponse extends SdkResponse {
    public data?: IdObject;
    public constructor() { 
        super();
    }
    public withData(data: IdObject): DeleteCaptureTaskResponse {
        this['data'] = data;
        return this;
    }
}