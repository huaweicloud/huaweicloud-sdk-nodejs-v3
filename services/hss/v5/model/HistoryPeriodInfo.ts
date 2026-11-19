import { StatPeriod } from './StatPeriod';


export class HistoryPeriodInfo {
    private 'report_id'?: number;
    private 'report_sub_id'?: number;
    private 'stat_period'?: StatPeriod;
    public constructor() { 
    }
    public withReportId(reportId: number): HistoryPeriodInfo {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: number  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): number | undefined {
        return this['report_id'];
    }
    public withReportSubId(reportSubId: number): HistoryPeriodInfo {
        this['report_sub_id'] = reportSubId;
        return this;
    }
    public set reportSubId(reportSubId: number  | undefined) {
        this['report_sub_id'] = reportSubId;
    }
    public get reportSubId(): number | undefined {
        return this['report_sub_id'];
    }
    public withStatPeriod(statPeriod: StatPeriod): HistoryPeriodInfo {
        this['stat_period'] = statPeriod;
        return this;
    }
    public set statPeriod(statPeriod: StatPeriod  | undefined) {
        this['stat_period'] = statPeriod;
    }
    public get statPeriod(): StatPeriod | undefined {
        return this['stat_period'];
    }
}