
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBlackWhiteListResponse extends SdkResponse {
    public type?: number;
    private 'ip_list'?: Array<string>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withType(type: number): ShowBlackWhiteListResponse {
        this['type'] = type;
        return this;
    }
    public withIpList(ipList: Array<string>): ShowBlackWhiteListResponse {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<string>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<string> | undefined {
        return this['ip_list'];
    }
    public withXRequestId(xRequestId: string): ShowBlackWhiteListResponse {
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