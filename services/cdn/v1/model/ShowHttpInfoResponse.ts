import { HttpInfoResponseBody } from './HttpInfoResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHttpInfoResponse extends SdkResponse {
    public https?: HttpInfoResponseBody;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withHttps(https: HttpInfoResponseBody): ShowHttpInfoResponse {
        this['https'] = https;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowHttpInfoResponse {
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