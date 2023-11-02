

export class StatisticForDashboard {
    private 'log_time'?: number;
    private 'call_num'?: number;
    private 'success_num'?: number;
    private 'fail_num'?: number;
    private 'legal_num'?: number;
    private 'illegal_num'?: number;
    private 'cost_time_avg'?: number;
    private 'success_cost_time_avg'?: number;
    private 'fail_cost_time_avg'?: number;
    private 'success_rate'?: number;
    private 'fail_rate'?: number;
    private 'legal_rate'?: number;
    private 'illegal_rate'?: number;
    public constructor() { 
    }
    public withLogTime(logTime: number): StatisticForDashboard {
        this['log_time'] = logTime;
        return this;
    }
    public set logTime(logTime: number  | undefined) {
        this['log_time'] = logTime;
    }
    public get logTime(): number | undefined {
        return this['log_time'];
    }
    public withCallNum(callNum: number): StatisticForDashboard {
        this['call_num'] = callNum;
        return this;
    }
    public set callNum(callNum: number  | undefined) {
        this['call_num'] = callNum;
    }
    public get callNum(): number | undefined {
        return this['call_num'];
    }
    public withSuccessNum(successNum: number): StatisticForDashboard {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withFailNum(failNum: number): StatisticForDashboard {
        this['fail_num'] = failNum;
        return this;
    }
    public set failNum(failNum: number  | undefined) {
        this['fail_num'] = failNum;
    }
    public get failNum(): number | undefined {
        return this['fail_num'];
    }
    public withLegalNum(legalNum: number): StatisticForDashboard {
        this['legal_num'] = legalNum;
        return this;
    }
    public set legalNum(legalNum: number  | undefined) {
        this['legal_num'] = legalNum;
    }
    public get legalNum(): number | undefined {
        return this['legal_num'];
    }
    public withIllegalNum(illegalNum: number): StatisticForDashboard {
        this['illegal_num'] = illegalNum;
        return this;
    }
    public set illegalNum(illegalNum: number  | undefined) {
        this['illegal_num'] = illegalNum;
    }
    public get illegalNum(): number | undefined {
        return this['illegal_num'];
    }
    public withCostTimeAvg(costTimeAvg: number): StatisticForDashboard {
        this['cost_time_avg'] = costTimeAvg;
        return this;
    }
    public set costTimeAvg(costTimeAvg: number  | undefined) {
        this['cost_time_avg'] = costTimeAvg;
    }
    public get costTimeAvg(): number | undefined {
        return this['cost_time_avg'];
    }
    public withSuccessCostTimeAvg(successCostTimeAvg: number): StatisticForDashboard {
        this['success_cost_time_avg'] = successCostTimeAvg;
        return this;
    }
    public set successCostTimeAvg(successCostTimeAvg: number  | undefined) {
        this['success_cost_time_avg'] = successCostTimeAvg;
    }
    public get successCostTimeAvg(): number | undefined {
        return this['success_cost_time_avg'];
    }
    public withFailCostTimeAvg(failCostTimeAvg: number): StatisticForDashboard {
        this['fail_cost_time_avg'] = failCostTimeAvg;
        return this;
    }
    public set failCostTimeAvg(failCostTimeAvg: number  | undefined) {
        this['fail_cost_time_avg'] = failCostTimeAvg;
    }
    public get failCostTimeAvg(): number | undefined {
        return this['fail_cost_time_avg'];
    }
    public withSuccessRate(successRate: number): StatisticForDashboard {
        this['success_rate'] = successRate;
        return this;
    }
    public set successRate(successRate: number  | undefined) {
        this['success_rate'] = successRate;
    }
    public get successRate(): number | undefined {
        return this['success_rate'];
    }
    public withFailRate(failRate: number): StatisticForDashboard {
        this['fail_rate'] = failRate;
        return this;
    }
    public set failRate(failRate: number  | undefined) {
        this['fail_rate'] = failRate;
    }
    public get failRate(): number | undefined {
        return this['fail_rate'];
    }
    public withLegalRate(legalRate: number): StatisticForDashboard {
        this['legal_rate'] = legalRate;
        return this;
    }
    public set legalRate(legalRate: number  | undefined) {
        this['legal_rate'] = legalRate;
    }
    public get legalRate(): number | undefined {
        return this['legal_rate'];
    }
    public withIllegalRate(illegalRate: number): StatisticForDashboard {
        this['illegal_rate'] = illegalRate;
        return this;
    }
    public set illegalRate(illegalRate: number  | undefined) {
        this['illegal_rate'] = illegalRate;
    }
    public get illegalRate(): number | undefined {
        return this['illegal_rate'];
    }
}