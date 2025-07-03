import { SpanEventInfo } from './SpanEventInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTraceEventsResponse extends SdkResponse {
    private 'span_event_list'?: Array<SpanEventInfo>;
    public constructor() { 
        super();
    }
    public withSpanEventList(spanEventList: Array<SpanEventInfo>): ShowTraceEventsResponse {
        this['span_event_list'] = spanEventList;
        return this;
    }
    public set spanEventList(spanEventList: Array<SpanEventInfo>  | undefined) {
        this['span_event_list'] = spanEventList;
    }
    public get spanEventList(): Array<SpanEventInfo> | undefined {
        return this['span_event_list'];
    }
}