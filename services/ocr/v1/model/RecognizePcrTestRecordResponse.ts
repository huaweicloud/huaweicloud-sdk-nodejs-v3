import { PcrTestRecordResult } from './PcrTestRecordResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizePcrTestRecordResponse extends SdkResponse {
    public result?: PcrTestRecordResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: PcrTestRecordResult): RecognizePcrTestRecordResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizePcrTestRecordResponse {
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