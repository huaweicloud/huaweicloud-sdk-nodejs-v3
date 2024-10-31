import { CaptureTaskId } from './CaptureTaskId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCaptureTaskResponse extends SdkResponse {
    public data?: CaptureTaskId;
    public constructor() { 
        super();
    }
    public withData(data: CaptureTaskId): DeleteCaptureTaskResponse {
        this['data'] = data;
        return this;
    }
}