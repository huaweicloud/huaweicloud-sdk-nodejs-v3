import { EventRowsVo } from './EventRowsVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchBinlogParseResponse extends SdkResponse {
    public total?: number;
    private 'event_list'?: Array<EventRowsVo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): SearchBinlogParseResponse {
        this['total'] = total;
        return this;
    }
    public withEventList(eventList: Array<EventRowsVo>): SearchBinlogParseResponse {
        this['event_list'] = eventList;
        return this;
    }
    public set eventList(eventList: Array<EventRowsVo>  | undefined) {
        this['event_list'] = eventList;
    }
    public get eventList(): Array<EventRowsVo> | undefined {
        return this['event_list'];
    }
}