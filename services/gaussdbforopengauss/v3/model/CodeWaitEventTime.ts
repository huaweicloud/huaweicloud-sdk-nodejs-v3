import { EventTimeInfo } from './EventTimeInfo';


export class CodeWaitEventTime {
    private 'all_time'?: number;
    private 'code_wait_event_time_details'?: EventTimeInfo;
    public constructor(allTime?: number, codeWaitEventTimeDetails?: EventTimeInfo) { 
        this['all_time'] = allTime;
        this['code_wait_event_time_details'] = codeWaitEventTimeDetails;
    }
    public withAllTime(allTime: number): CodeWaitEventTime {
        this['all_time'] = allTime;
        return this;
    }
    public set allTime(allTime: number  | undefined) {
        this['all_time'] = allTime;
    }
    public get allTime(): number | undefined {
        return this['all_time'];
    }
    public withCodeWaitEventTimeDetails(codeWaitEventTimeDetails: EventTimeInfo): CodeWaitEventTime {
        this['code_wait_event_time_details'] = codeWaitEventTimeDetails;
        return this;
    }
    public set codeWaitEventTimeDetails(codeWaitEventTimeDetails: EventTimeInfo  | undefined) {
        this['code_wait_event_time_details'] = codeWaitEventTimeDetails;
    }
    public get codeWaitEventTimeDetails(): EventTimeInfo | undefined {
        return this['code_wait_event_time_details'];
    }
}