

export class OperationSummaryInfo {
    private 'hss_visit_days'?: number;
    private 'workload_beat_rate'?: number;
    private 'user_name'?: string;
    private 'current_month_start'?: number;
    private 'current_month_end'?: number;
    private 'handled_security_event_num'?: number;
    private 'total_workload_beat_rate'?: number;
    public title?: string;
    private 'report_id'?: string;
    private 'current_month'?: number;
    public work?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withHssVisitDays(hssVisitDays: number): OperationSummaryInfo {
        this['hss_visit_days'] = hssVisitDays;
        return this;
    }
    public set hssVisitDays(hssVisitDays: number  | undefined) {
        this['hss_visit_days'] = hssVisitDays;
    }
    public get hssVisitDays(): number | undefined {
        return this['hss_visit_days'];
    }
    public withWorkloadBeatRate(workloadBeatRate: number): OperationSummaryInfo {
        this['workload_beat_rate'] = workloadBeatRate;
        return this;
    }
    public set workloadBeatRate(workloadBeatRate: number  | undefined) {
        this['workload_beat_rate'] = workloadBeatRate;
    }
    public get workloadBeatRate(): number | undefined {
        return this['workload_beat_rate'];
    }
    public withUserName(userName: string): OperationSummaryInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withCurrentMonthStart(currentMonthStart: number): OperationSummaryInfo {
        this['current_month_start'] = currentMonthStart;
        return this;
    }
    public set currentMonthStart(currentMonthStart: number  | undefined) {
        this['current_month_start'] = currentMonthStart;
    }
    public get currentMonthStart(): number | undefined {
        return this['current_month_start'];
    }
    public withCurrentMonthEnd(currentMonthEnd: number): OperationSummaryInfo {
        this['current_month_end'] = currentMonthEnd;
        return this;
    }
    public set currentMonthEnd(currentMonthEnd: number  | undefined) {
        this['current_month_end'] = currentMonthEnd;
    }
    public get currentMonthEnd(): number | undefined {
        return this['current_month_end'];
    }
    public withHandledSecurityEventNum(handledSecurityEventNum: number): OperationSummaryInfo {
        this['handled_security_event_num'] = handledSecurityEventNum;
        return this;
    }
    public set handledSecurityEventNum(handledSecurityEventNum: number  | undefined) {
        this['handled_security_event_num'] = handledSecurityEventNum;
    }
    public get handledSecurityEventNum(): number | undefined {
        return this['handled_security_event_num'];
    }
    public withTotalWorkloadBeatRate(totalWorkloadBeatRate: number): OperationSummaryInfo {
        this['total_workload_beat_rate'] = totalWorkloadBeatRate;
        return this;
    }
    public set totalWorkloadBeatRate(totalWorkloadBeatRate: number  | undefined) {
        this['total_workload_beat_rate'] = totalWorkloadBeatRate;
    }
    public get totalWorkloadBeatRate(): number | undefined {
        return this['total_workload_beat_rate'];
    }
    public withTitle(title: string): OperationSummaryInfo {
        this['title'] = title;
        return this;
    }
    public withReportId(reportId: string): OperationSummaryInfo {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withCurrentMonth(currentMonth: number): OperationSummaryInfo {
        this['current_month'] = currentMonth;
        return this;
    }
    public set currentMonth(currentMonth: number  | undefined) {
        this['current_month'] = currentMonth;
    }
    public get currentMonth(): number | undefined {
        return this['current_month'];
    }
    public withWork(work: string): OperationSummaryInfo {
        this['work'] = work;
        return this;
    }
    public withCreateTime(createTime: number): OperationSummaryInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}