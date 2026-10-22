import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoDocCountItems } from './SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoDocCountItems';


export class SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline {
    public time?: number;
    public num?: number;
    public docCountItems?: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoDocCountItems>;
    public constructor() { 
    }
    public withTime(time: number): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline {
        this['time'] = time;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline {
        this['num'] = num;
        return this;
    }
    public withDocCountItems(docCountItems: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoDocCountItems>): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline {
        this['docCountItems'] = docCountItems;
        return this;
    }
}