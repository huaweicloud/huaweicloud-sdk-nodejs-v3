import { HeaderMap } from './HeaderMap';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateResponseHeaderResponse extends SdkResponse {
    public headers?: HeaderMap;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withHeaders(headers: HeaderMap): UpdateResponseHeaderResponse {
        this['headers'] = headers;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateResponseHeaderResponse {
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