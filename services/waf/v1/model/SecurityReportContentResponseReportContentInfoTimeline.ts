

export class SecurityReportContentResponseReportContentInfoTimeline {
    public time?: number;
    public num?: number;
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
}