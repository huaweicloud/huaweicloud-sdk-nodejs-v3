import { IdObject } from './IdObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelCaptureTaskResponse extends SdkResponse {
    public data?: IdObject;
    public constructor() { 
        super();
    }
    public withData(data: IdObject): CancelCaptureTaskResponse {
        this['data'] = data;
        return this;
    }
}