import { DeliverItem } from './DeliverItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailOfEventTraceResponse extends SdkResponse {
    public eventId?: string;
    public eventSource?: string;
    public eventType?: string;
    public receiveTime?: string;
    public channelId?: string;
    public channelName?: string;
    public deliverList?: Array<DeliverItem>;
    public constructor() { 
        super();
    }
    public withEventId(eventId: string): ShowDetailOfEventTraceResponse {
        this['eventId'] = eventId;
        return this;
    }
    public withEventSource(eventSource: string): ShowDetailOfEventTraceResponse {
        this['eventSource'] = eventSource;
        return this;
    }
    public withEventType(eventType: string): ShowDetailOfEventTraceResponse {
        this['eventType'] = eventType;
        return this;
    }
    public withReceiveTime(receiveTime: string): ShowDetailOfEventTraceResponse {
        this['receiveTime'] = receiveTime;
        return this;
    }
    public withChannelId(channelId: string): ShowDetailOfEventTraceResponse {
        this['channelId'] = channelId;
        return this;
    }
    public withChannelName(channelName: string): ShowDetailOfEventTraceResponse {
        this['channelName'] = channelName;
        return this;
    }
    public withDeliverList(deliverList: Array<DeliverItem>): ShowDetailOfEventTraceResponse {
        this['deliverList'] = deliverList;
        return this;
    }
}