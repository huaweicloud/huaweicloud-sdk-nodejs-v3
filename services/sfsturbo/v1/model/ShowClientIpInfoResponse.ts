
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClientIpInfoResponse extends SdkResponse {
    public id?: string;
    public ips?: Array<string>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowClientIpInfoResponse {
        this['id'] = id;
        return this;
    }
    public withIps(ips: Array<string>): ShowClientIpInfoResponse {
        this['ips'] = ips;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowClientIpInfoResponse {
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