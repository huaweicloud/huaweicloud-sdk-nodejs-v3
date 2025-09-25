import { PolicyInfo } from './PolicyInfo';
import { RiskListInfo } from './RiskListInfo';


export class AlarmRiskInfo {
    private 'risk_list'?: Array<RiskListInfo>;
    private 'deduct_score'?: number;
    private 'policy_list'?: Array<PolicyInfo>;
    private 'total_risk_num'?: number;
    public constructor() { 
    }
    public withRiskList(riskList: Array<RiskListInfo>): AlarmRiskInfo {
        this['risk_list'] = riskList;
        return this;
    }
    public set riskList(riskList: Array<RiskListInfo>  | undefined) {
        this['risk_list'] = riskList;
    }
    public get riskList(): Array<RiskListInfo> | undefined {
        return this['risk_list'];
    }
    public withDeductScore(deductScore: number): AlarmRiskInfo {
        this['deduct_score'] = deductScore;
        return this;
    }
    public set deductScore(deductScore: number  | undefined) {
        this['deduct_score'] = deductScore;
    }
    public get deductScore(): number | undefined {
        return this['deduct_score'];
    }
    public withPolicyList(policyList: Array<PolicyInfo>): AlarmRiskInfo {
        this['policy_list'] = policyList;
        return this;
    }
    public set policyList(policyList: Array<PolicyInfo>  | undefined) {
        this['policy_list'] = policyList;
    }
    public get policyList(): Array<PolicyInfo> | undefined {
        return this['policy_list'];
    }
    public withTotalRiskNum(totalRiskNum: number): AlarmRiskInfo {
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