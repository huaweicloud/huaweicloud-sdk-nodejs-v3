

export class ProtectStatusStatistics {
    private 'protect_type'?: string;
    private 'total_num'?: number;
    private 'unprotected_num'?: number;
    private 'protected_num'?: number;
    private 'risk_num'?: number;
    private 'clean_num'?: number;
    public constructor() { 
    }
    public withProtectType(protectType: string): ProtectStatusStatistics {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): string | undefined {
        return this['protect_type'];
    }
    public withTotalNum(totalNum: number): ProtectStatusStatistics {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withUnprotectedNum(unprotectedNum: number): ProtectStatusStatistics {
        this['unprotected_num'] = unprotectedNum;
        return this;
    }
    public set unprotectedNum(unprotectedNum: number  | undefined) {
        this['unprotected_num'] = unprotectedNum;
    }
    public get unprotectedNum(): number | undefined {
        return this['unprotected_num'];
    }
    public withProtectedNum(protectedNum: number): ProtectStatusStatistics {
        this['protected_num'] = protectedNum;
        return this;
    }
    public set protectedNum(protectedNum: number  | undefined) {
        this['protected_num'] = protectedNum;
    }
    public get protectedNum(): number | undefined {
        return this['protected_num'];
    }
    public withRiskNum(riskNum: number): ProtectStatusStatistics {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withCleanNum(cleanNum: number): ProtectStatusStatistics {
        this['clean_num'] = cleanNum;
        return this;
    }
    public set cleanNum(cleanNum: number  | undefined) {
        this['clean_num'] = cleanNum;
    }
    public get cleanNum(): number | undefined {
        return this['clean_num'];
    }
}