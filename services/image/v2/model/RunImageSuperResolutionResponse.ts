import { ImageSuperResolutionResponseResult } from './ImageSuperResolutionResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunImageSuperResolutionResponse extends SdkResponse {
    public result?: ImageSuperResolutionResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: ImageSuperResolutionResponseResult): RunImageSuperResolutionResponse {
        this['result'] = result;
        return this;
    }
}