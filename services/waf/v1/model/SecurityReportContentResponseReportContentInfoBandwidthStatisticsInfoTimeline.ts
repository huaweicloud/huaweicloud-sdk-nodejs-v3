import { SecurityReportContentResponseReportContentInfoDocCountItems } from './SecurityReportContentResponseReportContentInfoDocCountItems';


export class SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline {
    public time?: number;
    public num?: number;
    public docCountItems?: Array<SecurityReportContentResponseReportContentInfoDocCountItems>;
    public constructor() { 
    }
    public withTime(time: number): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline {
        this['time'] = time;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline {
        this['num'] = num;
        return this;
    }
    public withDocCountItems(docCountItems: Array<SecurityReportContentResponseReportContentInfoDocCountItems>): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline {
        this['docCountItems'] = docCountItems;
        return this;
    }
}