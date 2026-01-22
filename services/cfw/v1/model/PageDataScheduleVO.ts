import { ScheduleVO } from './ScheduleVO';


export class PageDataScheduleVO {
    public limit?: number;
    public offset?: number;
    public records?: Array<ScheduleVO>;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): PageDataScheduleVO {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): PageDataScheduleVO {
        this['offset'] = offset;
        return this;
    }
    public withRecords(records: Array<ScheduleVO>): PageDataScheduleVO {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): PageDataScheduleVO {
        this['total'] = total;
        return this;
    }
}