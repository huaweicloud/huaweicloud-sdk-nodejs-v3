
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDetachInternetBandwidthResponse extends SdkResponse {
    public body?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): BatchDetachInternetBandwidthResponse {
        this['body'] = body;
        return this;
    }
    public withXRequestId(xRequestId: string): BatchDetachInternetBandwidthResponse {
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