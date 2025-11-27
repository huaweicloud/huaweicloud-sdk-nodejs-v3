
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountResourcesResponse extends SdkResponse {
    public data?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withData(data: number): CountResourcesResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): CountResourcesResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}