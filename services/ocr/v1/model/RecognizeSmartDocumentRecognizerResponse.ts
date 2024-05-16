import { SmartDocumentRecognizerResult } from './SmartDocumentRecognizerResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeSmartDocumentRecognizerResponse extends SdkResponse {
    public result?: Array<SmartDocumentRecognizerResult>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<SmartDocumentRecognizerResult>): RecognizeSmartDocumentRecognizerResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeSmartDocumentRecognizerResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}