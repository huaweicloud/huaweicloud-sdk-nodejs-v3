import { PolicyInfo } from './PolicyInfo';
import { RiskListInfo } from './RiskListInfo';


export class SecurityRiskResponseBaselineRisk {
    private 'risk_list'?: Array<RiskListInfo>;
    private 'deduct_score'?: number;
    private 'policy_list'?: Array<PolicyInfo>;
    private 'existed_pwd_host_num'?: number;
    private 'un_scanned_baseline_host_num'?: number;
    private 'total_risk_num'?: number;
    public constructor() { 
    }
    public withRiskList(riskList: Array<RiskListInfo>): SecurityRiskResponseBaselineRisk {
        this['risk_list'] = riskList;
        return this;
    }
    public set riskList(riskList: Array<RiskListInfo>  | undefined) {
        this['risk_list'] = riskList;
    }
    public get riskList(): Array<RiskListInfo> | undefined {
        return this['risk_list'];
    }
    public withDeductScore(deductScore: number): SecurityRiskResponseBaselineRisk {
        this['deduct_score'] = deductScore;
        return this;
    }
    public set deductScore(deductScore: number  | undefined) {
        this['deduct_score'] = deductScore;
    }
    public get deductScore(): number | undefined {
        return this['deduct_score'];
    }
    public withPolicyList(policyList: Array<PolicyInfo>): SecurityRiskResponseBaselineRisk {
        this['policy_list'] = policyList;
        return this;
    }
    public set policyList(policyList: Array<PolicyInfo>  | undefined) {
        this['policy_list'] = policyList;
    }
    public get policyList(): Array<PolicyInfo> | undefined {
        return this['policy_list'];
    }
    public withExistedPwdHostNum(existedPwdHostNum: number): SecurityRiskResponseBaselineRisk {
        this['existed_pwd_host_num'] = existedPwdHostNum;
        return this;
    }
    public set existedPwdHostNum(existedPwdHostNum: number  | undefined) {
        this['existed_pwd_host_num'] = existedPwdHostNum;
    }
    public get existedPwdHostNum(): number | undefined {
        return this['existed_pwd_host_num'];
    }
    public withUnScannedBaselineHostNum(unScannedBaselineHostNum: number): SecurityRiskResponseBaselineRisk {
        this['un_scanned_baseline_host_num'] = unScannedBaselineHostNum;
        return this;
    }
    public set unScannedBaselineHostNum(unScannedBaselineHostNum: number  | undefined) {
        this['un_scanned_baseline_host_num'] = unScannedBaselineHostNum;
    }
    public get unScannedBaselineHostNum(): number | undefined {
        return this['un_scanned_baseline_host_num'];
    }
    public withTotalRiskNum(totalRiskNum: number): SecurityRiskResponseBaselineRisk {
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