

export class AbnormalEventDimensionValue {
    private 'abnormal_type'?: number;
    private 'abnormal_type_desc'?: string;
    private 'abnormal_factor'?: number;
    private 'abnormal_factor_desc'?: string;
    private 'user_count'?: number;
    public constructor(abnormalType?: number, abnormalTypeDesc?: string, abnormalFactor?: number, abnormalFactorDesc?: string, userCount?: number) { 
        this['abnormal_type'] = abnormalType;
        this['abnormal_type_desc'] = abnormalTypeDesc;
        this['abnormal_factor'] = abnormalFactor;
        this['abnormal_factor_desc'] = abnormalFactorDesc;
        this['user_count'] = userCount;
    }
    public withAbnormalType(abnormalType: number): AbnormalEventDimensionValue {
        this['abnormal_type'] = abnormalType;
        return this;
    }
    public set abnormalType(abnormalType: number  | undefined) {
        this['abnormal_type'] = abnormalType;
    }
    public get abnormalType(): number | undefined {
        return this['abnormal_type'];
    }
    public withAbnormalTypeDesc(abnormalTypeDesc: string): AbnormalEventDimensionValue {
        this['abnormal_type_desc'] = abnormalTypeDesc;
        return this;
    }
    public set abnormalTypeDesc(abnormalTypeDesc: string  | undefined) {
        this['abnormal_type_desc'] = abnormalTypeDesc;
    }
    public get abnormalTypeDesc(): string | undefined {
        return this['abnormal_type_desc'];
    }
    public withAbnormalFactor(abnormalFactor: number): AbnormalEventDimensionValue {
        this['abnormal_factor'] = abnormalFactor;
        return this;
    }
    public set abnormalFactor(abnormalFactor: number  | undefined) {
        this['abnormal_factor'] = abnormalFactor;
    }
    public get abnormalFactor(): number | undefined {
        return this['abnormal_factor'];
    }
    public withAbnormalFactorDesc(abnormalFactorDesc: string): AbnormalEventDimensionValue {
        this['abnormal_factor_desc'] = abnormalFactorDesc;
        return this;
    }
    public set abnormalFactorDesc(abnormalFactorDesc: string  | undefined) {
        this['abnormal_factor_desc'] = abnormalFactorDesc;
    }
    public get abnormalFactorDesc(): string | undefined {
        return this['abnormal_factor_desc'];
    }
    public withUserCount(userCount: number): AbnormalEventDimensionValue {
        this['user_count'] = userCount;
        return this;
    }
    public set userCount(userCount: number  | undefined) {
        this['user_count'] = userCount;
    }
    public get userCount(): number | undefined {
        return this['user_count'];
    }
}