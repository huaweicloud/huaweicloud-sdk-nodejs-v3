import { ImageMainObjectDetectionInstance } from './ImageMainObjectDetectionInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunImageMainObjectDetectionResponse extends SdkResponse {
    public result?: Array<ImageMainObjectDetectionInstance>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ImageMainObjectDetectionInstance>): RunImageMainObjectDetectionResponse {
        this['result'] = result;
        return this;
    }
}