
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteInternetBandwidthResponse extends SdkResponse {
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withXRequestId(xRequestId: string): DeleteInternetBandwidthResponse {
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