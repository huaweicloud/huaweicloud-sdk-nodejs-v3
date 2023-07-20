
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBlackWhiteListResponse extends SdkResponse {
    public type?: number;
    private 'ip_list'?: Array<string>;
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
}