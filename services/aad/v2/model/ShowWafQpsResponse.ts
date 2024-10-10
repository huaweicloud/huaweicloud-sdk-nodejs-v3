
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWafQpsResponse extends SdkResponse {
    public qps?: number;
    public constructor() { 
        super();
    }
    public withQps(qps: number): ShowWafQpsResponse {
        this['qps'] = qps;
        return this;
    }
}