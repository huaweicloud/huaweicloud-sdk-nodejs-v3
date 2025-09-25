

export class SecurityRiskResponseSecurityProtectRisk {
    private 'un_open_protection_host_num'?: number;
    private 'deduct_score'?: number;
    private 'total_risk_num'?: number;
    public constructor() { 
    }
    public withUnOpenProtectionHostNum(unOpenProtectionHostNum: number): SecurityRiskResponseSecurityProtectRisk {
        this['un_open_protection_host_num'] = unOpenProtectionHostNum;
        return this;
    }
    public set unOpenProtectionHostNum(unOpenProtectionHostNum: number  | undefined) {
        this['un_open_protection_host_num'] = unOpenProtectionHostNum;
    }
    public get unOpenProtectionHostNum(): number | undefined {
        return this['un_open_protection_host_num'];
    }
    public withDeductScore(deductScore: number): SecurityRiskResponseSecurityProtectRisk {
        this['deduct_score'] = deductScore;
        return this;
    }
    public set deductScore(deductScore: number  | undefined) {
        this['deduct_score'] = deductScore;
    }
    public get deductScore(): number | undefined {
        return this['deduct_score'];
    }
    public withTotalRiskNum(totalRiskNum: number): SecurityRiskResponseSecurityProtectRisk {
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