import { EventEventsDto } from './EventEventsDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBinlogParseResponse extends SdkResponse {
    private 'event_list'?: Array<EventEventsDto>;
    public constructor() { 
        super();
    }
    public withEventList(eventList: Array<EventEventsDto>): ShowBinlogParseResponse {
        this['event_list'] = eventList;
        return this;
    }
    public set eventList(eventList: Array<EventEventsDto>  | undefined) {
        this['event_list'] = eventList;
    }
    public get eventList(): Array<EventEventsDto> | undefined {
        return this['event_list'];
    }
}