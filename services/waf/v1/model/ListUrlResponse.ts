
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUrlResponse extends SdkResponse {
    public qps?: number;
    public constructor() { 
        super();
    }
    public withQps(qps: number): ListUrlResponse {
        this['qps'] = qps;
        return this;
    }
}