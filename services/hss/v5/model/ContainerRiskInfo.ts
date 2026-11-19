

export class ContainerRiskInfo {
    private 'baseline_risk_num'?: number;
    private 'vul_total_num'?: number;
    private 'critical_vul_num'?: number;
    public constructor() { 
    }
    public withBaselineRiskNum(baselineRiskNum: number): ContainerRiskInfo {
        this['baseline_risk_num'] = baselineRiskNum;
        return this;
    }
    public set baselineRiskNum(baselineRiskNum: number  | undefined) {
        this['baseline_risk_num'] = baselineRiskNum;
    }
    public get baselineRiskNum(): number | undefined {
        return this['baseline_risk_num'];
    }
    public withVulTotalNum(vulTotalNum: number): ContainerRiskInfo {
        this['vul_total_num'] = vulTotalNum;
        return this;
    }
    public set vulTotalNum(vulTotalNum: number  | undefined) {
        this['vul_total_num'] = vulTotalNum;
    }
    public get vulTotalNum(): number | undefined {
        return this['vul_total_num'];
    }
    public withCriticalVulNum(criticalVulNum: number): ContainerRiskInfo {
        this['critical_vul_num'] = criticalVulNum;
        return this;
    }
    public set criticalVulNum(criticalVulNum: number  | undefined) {
        this['critical_vul_num'] = criticalVulNum;
    }
    public get criticalVulNum(): number | undefined {
        return this['critical_vul_num'];
    }
}