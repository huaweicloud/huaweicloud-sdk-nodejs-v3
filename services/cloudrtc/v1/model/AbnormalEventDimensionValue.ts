

export class AbnormalEventDimensionValue {
    private 'abnormal_type': number | undefined;
    private 'abnormal_type_desc': string | undefined;
    private 'abnormal_factor': number | undefined;
    private 'abnormal_factor_desc': string | undefined;
    private 'user_count': number | undefined;
    public constructor(abnormalType?: any, abnormalTypeDesc?: any, abnormalFactor?: any, abnormalFactorDesc?: any, userCount?: any) { 
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
    public set abnormalType(abnormalType: number | undefined) {
        this['abnormal_type'] = abnormalType;
    }
    public get abnormalType() {
        return this['abnormal_type'];
    }
    public withAbnormalTypeDesc(abnormalTypeDesc: string): AbnormalEventDimensionValue {
        this['abnormal_type_desc'] = abnormalTypeDesc;
        return this;
    }
    public set abnormalTypeDesc(abnormalTypeDesc: string | undefined) {
        this['abnormal_type_desc'] = abnormalTypeDesc;
    }
    public get abnormalTypeDesc() {
        return this['abnormal_type_desc'];
    }
    public withAbnormalFactor(abnormalFactor: number): AbnormalEventDimensionValue {
        this['abnormal_factor'] = abnormalFactor;
        return this;
    }
    public set abnormalFactor(abnormalFactor: number | undefined) {
        this['abnormal_factor'] = abnormalFactor;
    }
    public get abnormalFactor() {
        return this['abnormal_factor'];
    }
    public withAbnormalFactorDesc(abnormalFactorDesc: string): AbnormalEventDimensionValue {
        this['abnormal_factor_desc'] = abnormalFactorDesc;
        return this;
    }
    public set abnormalFactorDesc(abnormalFactorDesc: string | undefined) {
        this['abnormal_factor_desc'] = abnormalFactorDesc;
    }
    public get abnormalFactorDesc() {
        return this['abnormal_factor_desc'];
    }
    public withUserCount(userCount: number): AbnormalEventDimensionValue {
        this['user_count'] = userCount;
        return this;
    }
    public set userCount(userCount: number | undefined) {
        this['user_count'] = userCount;
    }
    public get userCount() {
        return this['user_count'];
    }
}