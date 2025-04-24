import { EventPubMetricsItem } from './EventPubMetricsItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPubMetricsResponse extends SdkResponse {
    public total?: number;
    public result?: Array<EventPubMetricsItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListPubMetricsResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<EventPubMetricsItem>): ListPubMetricsResponse {
        this['result'] = result;
        return this;
    }
}