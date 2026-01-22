import { StatisticPeriod } from './StatisticPeriod';


export class ReportHistoryVO {
    private 'report_id'?: string;
    private 'send_time'?: number;
    private 'statistic_period'?: StatisticPeriod;
    public constructor() { 
    }
    public withReportId(reportId: string): ReportHistoryVO {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withSendTime(sendTime: number): ReportHistoryVO {
        this['send_time'] = sendTime;
        return this;
    }
    public set sendTime(sendTime: number  | undefined) {
        this['send_time'] = sendTime;
    }
    public get sendTime(): number | undefined {
        return this['send_time'];
    }
    public withStatisticPeriod(statisticPeriod: StatisticPeriod): ReportHistoryVO {
        this['statistic_period'] = statisticPeriod;
        return this;
    }
    public set statisticPeriod(statisticPeriod: StatisticPeriod  | undefined) {
        this['statistic_period'] = statisticPeriod;
    }
    public get statisticPeriod(): StatisticPeriod | undefined {
        return this['statistic_period'];
    }
}