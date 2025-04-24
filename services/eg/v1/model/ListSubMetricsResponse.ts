import { EventSubMetricsItem } from './EventSubMetricsItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubMetricsResponse extends SdkResponse {
    public total?: number;
    public result?: Array<EventSubMetricsItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSubMetricsResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<EventSubMetricsItem>): ListSubMetricsResponse {
        this['result'] = result;
        return this;
    }
}