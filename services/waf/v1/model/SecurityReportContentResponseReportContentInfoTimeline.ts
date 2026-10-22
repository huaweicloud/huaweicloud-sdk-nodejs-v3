import { SecurityReportContentResponseReportContentInfoDocCountItems } from './SecurityReportContentResponseReportContentInfoDocCountItems';


export class SecurityReportContentResponseReportContentInfoTimeline {
    public time?: number;
    public num?: number;
    public docCountItems?: Array<SecurityReportContentResponseReportContentInfoDocCountItems>;
    public constructor() { 
    }
    public withTime(time: number): SecurityReportContentResponseReportContentInfoTimeline {
        this['time'] = time;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoTimeline {
        this['num'] = num;
        return this;
    }
    public withDocCountItems(docCountItems: Array<SecurityReportContentResponseReportContentInfoDocCountItems>): SecurityReportContentResponseReportContentInfoTimeline {
        this['docCountItems'] = docCountItems;
        return this;
    }
}