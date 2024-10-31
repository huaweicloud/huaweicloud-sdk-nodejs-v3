import { CaptureTaskId } from './CaptureTaskId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCaptureTaskResponse extends SdkResponse {
    public data?: CaptureTaskId;
    public constructor() { 
        super();
    }
    public withData(data: CaptureTaskId): CreateCaptureTaskResponse {
        this['data'] = data;
        return this;
    }
}