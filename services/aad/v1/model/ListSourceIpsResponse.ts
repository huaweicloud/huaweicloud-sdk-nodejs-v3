
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSourceIpsResponse extends SdkResponse {
    public ips?: Array<string>;
    public constructor() { 
        super();
    }
    public withIps(ips: Array<string>): ListSourceIpsResponse {
        this['ips'] = ips;
        return this;
    }
}