import { RiskListInfo } from './RiskListInfo';


export class SecurityRiskResponseVulRisk {
    private 'risk_list'?: Array<RiskListInfo>;
    private 'deduct_score'?: number;
    private 'un_scanned_host_num'?: number;
    private 'total_risk_num'?: number;
    public constructor() { 
    }
    public withRiskList(riskList: Array<RiskListInfo>): SecurityRiskResponseVulRisk {
        this['risk_list'] = riskList;
        return this;
    }
    public set riskList(riskList: Array<RiskListInfo>  | undefined) {
        this['risk_list'] = riskList;
    }
    public get riskList(): Array<RiskListInfo> | undefined {
        return this['risk_list'];
    }
    public withDeductScore(deductScore: number): SecurityRiskResponseVulRisk {
        this['deduct_score'] = deductScore;
        return this;
    }
    public set deductScore(deductScore: number  | undefined) {
        this['deduct_score'] = deductScore;
    }
    public get deductScore(): number | undefined {
        return this['deduct_score'];
    }
    public withUnScannedHostNum(unScannedHostNum: number): SecurityRiskResponseVulRisk {
        this['un_scanned_host_num'] = unScannedHostNum;
        return this;
    }
    public set unScannedHostNum(unScannedHostNum: number  | undefined) {
        this['un_scanned_host_num'] = unScannedHostNum;
    }
    public get unScannedHostNum(): number | undefined {
        return this['un_scanned_host_num'];
    }
    public withTotalRiskNum(totalRiskNum: number): SecurityRiskResponseVulRisk {
        this['total_risk_num'] = totalRiskNum;
        return this;
    }
    public set totalRiskNum(totalRiskNum: number  | undefined) {
        this['total_risk_num'] = totalRiskNum;
    }
    public get totalRiskNum(): number | undefined {
        return this['total_risk_num'];
    }
}