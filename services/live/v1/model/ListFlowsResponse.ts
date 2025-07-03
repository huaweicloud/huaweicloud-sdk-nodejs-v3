import { ListFlowRespItem } from './ListFlowRespItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlowsResponse extends SdkResponse {
    public total?: number;
    public flows?: Array<ListFlowRespItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFlowsResponse {
        this['total'] = total;
        return this;
    }
    public withFlows(flows: Array<ListFlowRespItem>): ListFlowsResponse {
        this['flows'] = flows;
        return this;
    }
}