import { ImageTaggingResponseResult } from './ImageTaggingResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunImageTaggingResponse extends SdkResponse {
    public result?: ImageTaggingResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: ImageTaggingResponseResult): RunImageTaggingResponse {
        this['result'] = result;
        return this;
    }
}