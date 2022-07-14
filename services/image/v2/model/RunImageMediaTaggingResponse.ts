import { ImageMediaTaggingResponseResult } from './ImageMediaTaggingResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunImageMediaTaggingResponse extends SdkResponse {
    public result?: ImageMediaTaggingResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: ImageMediaTaggingResponseResult): RunImageMediaTaggingResponse {
        this['result'] = result;
        return this;
    }
}