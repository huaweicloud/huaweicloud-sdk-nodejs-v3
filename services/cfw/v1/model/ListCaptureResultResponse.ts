import { CaptureResultUrlVO } from './CaptureResultUrlVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCaptureResultResponse extends SdkResponse {
    public data?: CaptureResultUrlVO;
    public constructor() { 
        super();
    }
    public withData(data: CaptureResultUrlVO): ListCaptureResultResponse {
        this['data'] = data;
        return this;
    }
}