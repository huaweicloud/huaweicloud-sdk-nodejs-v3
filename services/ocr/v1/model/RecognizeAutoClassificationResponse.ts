import { AutoClassificationResult } from './AutoClassificationResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeAutoClassificationResponse extends SdkResponse {
    public result?: Array<AutoClassificationResult>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<AutoClassificationResult>): RecognizeAutoClassificationResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeAutoClassificationResponse {
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