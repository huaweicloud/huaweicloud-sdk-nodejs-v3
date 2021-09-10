import { WebImageResult } from './WebImageResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeWebImageResponse extends SdkResponse {
    public result?: WebImageResult;
    public constructor() { 
        super();
    }
    public withResult(result: WebImageResult): RecognizeWebImageResponse {
        this['result'] = result;
        return this;
    }
}