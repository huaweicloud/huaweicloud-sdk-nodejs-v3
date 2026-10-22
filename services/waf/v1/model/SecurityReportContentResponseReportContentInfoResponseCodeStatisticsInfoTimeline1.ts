import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoDocCountItems } from './SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoDocCountItems';


export class SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline1 {
    public time?: number;
    public num?: number;
    public docCountItems?: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoDocCountItems>;
    public constructor() { 
    }
    public withTime(time: number): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline1 {
        this['time'] = time;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline1 {
        this['num'] = num;
        return this;
    }
    public withDocCountItems(docCountItems: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoDocCountItems>): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline1 {
        this['docCountItems'] = docCountItems;
        return this;
    }
}