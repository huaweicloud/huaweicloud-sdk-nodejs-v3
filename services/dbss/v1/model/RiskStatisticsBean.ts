

export class RiskStatisticsBean {
    private 'high_risk_num'?: number;
    private 'low_risk_num'?: number;
    private 'middle_risk_num'?: number;
    private 'no_risk_num'?: number;
    public period?: string;
    public constructor() { 
    }
    public withHighRiskNum(highRiskNum: number): RiskStatisticsBean {
        this['high_risk_num'] = highRiskNum;
        return this;
    }
    public set highRiskNum(highRiskNum: number  | undefined) {
        this['high_risk_num'] = highRiskNum;
    }
    public get highRiskNum(): number | undefined {
        return this['high_risk_num'];
    }
    public withLowRiskNum(lowRiskNum: number): RiskStatisticsBean {
        this['low_risk_num'] = lowRiskNum;
        return this;
    }
    public set lowRiskNum(lowRiskNum: number  | undefined) {
        this['low_risk_num'] = lowRiskNum;
    }
    public get lowRiskNum(): number | undefined {
        return this['low_risk_num'];
    }
    public withMiddleRiskNum(middleRiskNum: number): RiskStatisticsBean {
        this['middle_risk_num'] = middleRiskNum;
        return this;
    }
    public set middleRiskNum(middleRiskNum: number  | undefined) {
        this['middle_risk_num'] = middleRiskNum;
    }
    public get middleRiskNum(): number | undefined {
        return this['middle_risk_num'];
    }
    public withNoRiskNum(noRiskNum: number): RiskStatisticsBean {
        this['no_risk_num'] = noRiskNum;
        return this;
    }
    public set noRiskNum(noRiskNum: number  | undefined) {
        this['no_risk_num'] = noRiskNum;
    }
    public get noRiskNum(): number | undefined {
        return this['no_risk_num'];
    }
    public withPeriod(period: string): RiskStatisticsBean {
        this['period'] = period;
        return this;
    }
}