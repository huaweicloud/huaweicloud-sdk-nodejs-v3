import { EventDump } from './EventDump';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventLogResponse extends SdkResponse {
    public total?: number;
    public items?: Array<EventDump>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEventLogResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<EventDump>): ListEventLogResponse {
        this['items'] = items;
        return this;
    }
}