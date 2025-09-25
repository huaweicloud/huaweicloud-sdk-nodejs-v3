import { PolicyInfo } from './PolicyInfo';


export class SecurityRiskResponseAssetRisk {
    private 'existed_danger_port_host_num'?: number;
    private 'policy_list'?: Array<PolicyInfo>;
    private 'deduct_score'?: number;
    private 'total_risk_num'?: number;
    public constructor() { 
    }
    public withExistedDangerPortHostNum(existedDangerPortHostNum: number): SecurityRiskResponseAssetRisk {
        this['existed_danger_port_host_num'] = existedDangerPortHostNum;
        return this;
    }
    public set existedDangerPortHostNum(existedDangerPortHostNum: number  | undefined) {
        this['existed_danger_port_host_num'] = existedDangerPortHostNum;
    }
    public get existedDangerPortHostNum(): number | undefined {
        return this['existed_danger_port_host_num'];
    }
    public withPolicyList(policyList: Array<PolicyInfo>): SecurityRiskResponseAssetRisk {
        this['policy_list'] = policyList;
        return this;
    }
    public set policyList(policyList: Array<PolicyInfo>  | undefined) {
        this['policy_list'] = policyList;
    }
    public get policyList(): Array<PolicyInfo> | undefined {
        return this['policy_list'];
    }
    public withDeductScore(deductScore: number): SecurityRiskResponseAssetRisk {
        this['deduct_score'] = deductScore;
        return this;
    }
    public set deductScore(deductScore: number  | undefined) {
        this['deduct_score'] = deductScore;
    }
    public get deductScore(): number | undefined {
        return this['deduct_score'];
    }
    public withTotalRiskNum(totalRiskNum: number): SecurityRiskResponseAssetRisk {
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