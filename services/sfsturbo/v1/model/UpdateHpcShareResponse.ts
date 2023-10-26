
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHpcShareResponse extends SdkResponse {
    private 'gc_time'?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withGcTime(gcTime: number): UpdateHpcShareResponse {
        this['gc_time'] = gcTime;
        return this;
    }
    public set gcTime(gcTime: number  | undefined) {
        this['gc_time'] = gcTime;
    }
    public get gcTime(): number | undefined {
        return this['gc_time'];
    }
    public withXRequestId(xRequestId: string): UpdateHpcShareResponse {
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