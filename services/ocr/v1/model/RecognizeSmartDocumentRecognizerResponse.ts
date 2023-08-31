import { SmartDocumentRecognizerResult } from './SmartDocumentRecognizerResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeSmartDocumentRecognizerResponse extends SdkResponse {
    public result?: Array<SmartDocumentRecognizerResult>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<SmartDocumentRecognizerResult>): RecognizeSmartDocumentRecognizerResponse {
        this['result'] = result;
        return this;
    }
}