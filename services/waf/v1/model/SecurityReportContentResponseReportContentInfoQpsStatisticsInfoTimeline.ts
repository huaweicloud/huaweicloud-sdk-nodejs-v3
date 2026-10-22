import { SecurityReportContentResponseReportContentInfoDocCountItems } from './SecurityReportContentResponseReportContentInfoDocCountItems';


export class SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline {
    public time?: number;
    public num?: number;
    public docCountItems?: Array<SecurityReportContentResponseReportContentInfoDocCountItems>;
    public constructor() { 
    }
    public withTime(time: number): SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline {
        this['time'] = time;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline {
        this['num'] = num;
        return this;
    }
    public withDocCountItems(docCountItems: Array<SecurityReportContentResponseReportContentInfoDocCountItems>): SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline {
        this['docCountItems'] = docCountItems;
        return this;
    }
}