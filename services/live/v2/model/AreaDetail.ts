import { AreaTimeValue } from './AreaTimeValue';
import { TimeValue } from './TimeValue';


export class AreaDetail {
    public area: string;
    public summary: Array<TimeValue>;
    public detail: Array<AreaTimeValue>;
    public constructor(area?: any, summary?: any, detail?: any) { 
        this['area'] = area;
        this['summary'] = summary;
        this['detail'] = detail;
    }
    public withArea(area: string): AreaDetail {
        this['area'] = area;
        return this;
    }
    public withSummary(summary: Array<TimeValue>): AreaDetail {
        this['summary'] = summary;
        return this;
    }
    public withDetail(detail: Array<AreaTimeValue>): AreaDetail {
        this['detail'] = detail;
        return this;
    }
}