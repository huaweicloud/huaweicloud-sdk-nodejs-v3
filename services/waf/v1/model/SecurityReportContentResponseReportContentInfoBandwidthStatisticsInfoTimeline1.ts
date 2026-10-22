import { SecurityReportContentResponseReportContentInfoDocCountItems } from './SecurityReportContentResponseReportContentInfoDocCountItems';


export class SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline1 {
    public time?: number;
    public num?: number;
    public docCountItems?: Array<SecurityReportContentResponseReportContentInfoDocCountItems>;
    public constructor() { 
    }
    public withTime(time: number): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline1 {
        this['time'] = time;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline1 {
        this['num'] = num;
        return this;
    }
    public withDocCountItems(docCountItems: Array<SecurityReportContentResponseReportContentInfoDocCountItems>): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline1 {
        this['docCountItems'] = docCountItems;
        return this;
    }
}