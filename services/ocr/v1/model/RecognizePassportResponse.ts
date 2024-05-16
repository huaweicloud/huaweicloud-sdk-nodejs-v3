import { PassportResult } from './PassportResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizePassportResponse extends SdkResponse {
    public result?: PassportResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: PassportResult): RecognizePassportResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizePassportResponse {
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