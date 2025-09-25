

export class SecurityCheckRiskNumInfo {
    private 'total_risk_num'?: number;
    private 'compare_status'?: string;
    private 'compare_num'?: number;
    private 'high_risk_num'?: number;
    public constructor() { 
    }
    public withTotalRiskNum(totalRiskNum: number): SecurityCheckRiskNumInfo {
        this['total_risk_num'] = totalRiskNum;
        return this;
    }
    public set totalRiskNum(totalRiskNum: number  | undefined) {
        this['total_risk_num'] = totalRiskNum;
    }
    public get totalRiskNum(): number | undefined {
        return this['total_risk_num'];
    }
    public withCompareStatus(compareStatus: string): SecurityCheckRiskNumInfo {
        this['compare_status'] = compareStatus;
        return this;
    }
    public set compareStatus(compareStatus: string  | undefined) {
        this['compare_status'] = compareStatus;
    }
    public get compareStatus(): string | undefined {
        return this['compare_status'];
    }
    public withCompareNum(compareNum: number): SecurityCheckRiskNumInfo {
        this['compare_num'] = compareNum;
        return this;
    }
    public set compareNum(compareNum: number  | undefined) {
        this['compare_num'] = compareNum;
    }
    public get compareNum(): number | undefined {
        return this['compare_num'];
    }
    public withHighRiskNum(highRiskNum: number): SecurityCheckRiskNumInfo {
        this['high_risk_num'] = highRiskNum;
        return this;
    }
    public set highRiskNum(highRiskNum: number  | undefined) {
        this['high_risk_num'] = highRiskNum;
    }
    public get highRiskNum(): number | undefined {
        return this['high_risk_num'];
    }
}