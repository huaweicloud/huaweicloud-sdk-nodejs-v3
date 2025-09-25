

export class RiskListInfo {
    public severity?: string;
    private 'risk_num'?: number;
    private 'effected_host_num'?: number;
    public constructor() { 
    }
    public withSeverity(severity: string): RiskListInfo {
        this['severity'] = severity;
        return this;
    }
    public withRiskNum(riskNum: number): RiskListInfo {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withEffectedHostNum(effectedHostNum: number): RiskListInfo {
        this['effected_host_num'] = effectedHostNum;
        return this;
    }
    public set effectedHostNum(effectedHostNum: number  | undefined) {
        this['effected_host_num'] = effectedHostNum;
    }
    public get effectedHostNum(): number | undefined {
        return this['effected_host_num'];
    }
}