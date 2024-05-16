import { HkIdCardResult } from './HkIdCardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeHkIdCardResponse extends SdkResponse {
    public result?: HkIdCardResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: HkIdCardResult): RecognizeHkIdCardResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeHkIdCardResponse {
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