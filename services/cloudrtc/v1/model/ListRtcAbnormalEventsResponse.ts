import { AbnormalEvent } from './AbnormalEvent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcAbnormalEventsResponse extends SdkResponse {
    public total?: number;
    public events?: Array<AbnormalEvent>;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRtcAbnormalEventsResponse {
        this['total'] = total;
        return this;
    }
    public withEvents(events: Array<AbnormalEvent>): ListRtcAbnormalEventsResponse {
        this['events'] = events;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRtcAbnormalEventsResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-id'];
    }
}