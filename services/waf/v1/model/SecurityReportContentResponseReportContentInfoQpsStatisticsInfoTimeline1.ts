import { SecurityReportContentResponseReportContentInfoDocCountItems } from './SecurityReportContentResponseReportContentInfoDocCountItems';


export class SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline1 {
    public time?: number;
    public num?: number;
    public docCountItems?: Array<SecurityReportContentResponseReportContentInfoDocCountItems>;
    public constructor() { 
    }
    public withTime(time: number): SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline1 {
        this['time'] = time;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline1 {
        this['num'] = num;
        return this;
    }
    public withDocCountItems(docCountItems: Array<SecurityReportContentResponseReportContentInfoDocCountItems>): SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline1 {
        this['docCountItems'] = docCountItems;
        return this;
    }
}