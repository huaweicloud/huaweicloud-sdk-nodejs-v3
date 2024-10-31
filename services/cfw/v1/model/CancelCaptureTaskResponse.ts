import { CaptureTaskId } from './CaptureTaskId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelCaptureTaskResponse extends SdkResponse {
    public data?: CaptureTaskId;
    public constructor() { 
        super();
    }
    public withData(data: CaptureTaskId): CancelCaptureTaskResponse {
        this['data'] = data;
        return this;
    }
}