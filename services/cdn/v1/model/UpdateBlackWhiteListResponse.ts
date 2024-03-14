
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBlackWhiteListResponse extends SdkResponse {
    public code?: string;
    public result?: string;
    public data?: object;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateBlackWhiteListResponse {
        this['code'] = code;
        return this;
    }
    public withResult(result: string): UpdateBlackWhiteListResponse {
        this['result'] = result;
        return this;
    }
    public withData(data: object): UpdateBlackWhiteListResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateBlackWhiteListResponse {
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