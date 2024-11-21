import { PacifyWordsIntentInfo } from './PacifyWordsIntentInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPacifyWordsIntentResponse extends SdkResponse {
    public data?: Array<PacifyWordsIntentInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withData(data: Array<PacifyWordsIntentInfo>): ShowPacifyWordsIntentResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowPacifyWordsIntentResponse {
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