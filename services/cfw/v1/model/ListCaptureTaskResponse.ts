import { HttpQueryCaptureTaskResponseData } from './HttpQueryCaptureTaskResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCaptureTaskResponse extends SdkResponse {
    public data?: Array<HttpQueryCaptureTaskResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<HttpQueryCaptureTaskResponseData>): ListCaptureTaskResponse {
        this['data'] = data;
        return this;
    }
}