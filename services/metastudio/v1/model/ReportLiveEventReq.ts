import { LiveEvent } from './LiveEvent';


export class ReportLiveEventReq {
    public total?: number;
    public events?: Array<LiveEvent>;
    public constructor(total?: number) { 
        this['total'] = total;
    }
    public withTotal(total: number): ReportLiveEventReq {
        this['total'] = total;
        return this;
    }
    public withEvents(events: Array<LiveEvent>): ReportLiveEventReq {
        this['events'] = events;
        return this;
    }
}