import { BusinessCardResult } from './BusinessCardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeBusinessCardResponse extends SdkResponse {
    public result?: BusinessCardResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: BusinessCardResult): RecognizeBusinessCardResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeBusinessCardResponse {
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