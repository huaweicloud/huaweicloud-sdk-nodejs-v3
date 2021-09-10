import { AutoClassificationResult } from './AutoClassificationResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeAutoClassificationResponse extends SdkResponse {
    public result?: Array<AutoClassificationResult>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<AutoClassificationResult>): RecognizeAutoClassificationResponse {
        this['result'] = result;
        return this;
    }
}