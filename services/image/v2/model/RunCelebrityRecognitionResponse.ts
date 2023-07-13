import { CelebrityRecognitionResultBody } from './CelebrityRecognitionResultBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunCelebrityRecognitionResponse extends SdkResponse {
    public result?: Array<CelebrityRecognitionResultBody>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<CelebrityRecognitionResultBody>): RunCelebrityRecognitionResponse {
        this['result'] = result;
        return this;
    }
}