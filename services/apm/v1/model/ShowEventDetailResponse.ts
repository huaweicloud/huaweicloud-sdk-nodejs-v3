import { SpanEventInfo } from './SpanEventInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEventDetailResponse extends SdkResponse {
    private 'event_info'?: SpanEventInfo;
    public constructor() { 
        super();
    }
    public withEventInfo(eventInfo: SpanEventInfo): ShowEventDetailResponse {
        this['event_info'] = eventInfo;
        return this;
    }
    public set eventInfo(eventInfo: SpanEventInfo  | undefined) {
        this['event_info'] = eventInfo;
    }
    public get eventInfo(): SpanEventInfo | undefined {
        return this['event_info'];
    }
}