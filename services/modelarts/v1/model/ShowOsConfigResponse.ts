
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOsConfigResponse extends SdkResponse {
    public networkCidrs?: Array<string>;
    public networkQuota?: number;
    public poolQuota?: number;
    public poolHighAvailable?: boolean;
    public constructor() { 
        super();
    }
    public withNetworkCidrs(networkCidrs: Array<string>): ShowOsConfigResponse {
        this['networkCidrs'] = networkCidrs;
        return this;
    }
    public withNetworkQuota(networkQuota: number): ShowOsConfigResponse {
        this['networkQuota'] = networkQuota;
        return this;
    }
    public withPoolQuota(poolQuota: number): ShowOsConfigResponse {
        this['poolQuota'] = poolQuota;
        return this;
    }
    public withPoolHighAvailable(poolHighAvailable: boolean): ShowOsConfigResponse {
        this['poolHighAvailable'] = poolHighAvailable;
        return this;
    }
}