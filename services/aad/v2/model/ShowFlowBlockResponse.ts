import { Ips } from './Ips';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlowBlockResponse extends SdkResponse {
    public total?: number;
    public ips?: Array<Ips>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowFlowBlockResponse {
        this['total'] = total;
        return this;
    }
    public withIps(ips: Array<Ips>): ShowFlowBlockResponse {
        this['ips'] = ips;
        return this;
    }
}