

export class PrePaidServerExtendParam {
    public chargingMode?: PrePaidServerExtendParamChargingModeEnum;
    public regionID?: string;
    public periodType?: PrePaidServerExtendParamPeriodTypeEnum;
    public periodNum?: number;
    public isAutoRenew?: PrePaidServerExtendParamIsAutoRenewEnum;
    public isAutoPay?: PrePaidServerExtendParamIsAutoPayEnum;
    private 'enterprise_project_id'?: string | undefined;
    private 'support_auto_recovery'?: boolean | undefined;
    public marketType?: string;
    public spotPrice?: string;
    public diskPrior?: string;
    private 'spot_duration_hours'?: number | undefined;
    private 'interruption_policy'?: PrePaidServerExtendParamInterruptionPolicyEnum | undefined;
    private 'spot_duration_count'?: number | undefined;
    public constructor() { 
    }
    public withChargingMode(chargingMode: PrePaidServerExtendParamChargingModeEnum): PrePaidServerExtendParam {
        this['chargingMode'] = chargingMode;
        return this;
    }
    public withRegionID(regionID: string): PrePaidServerExtendParam {
        this['regionID'] = regionID;
        return this;
    }
    public withPeriodType(periodType: PrePaidServerExtendParamPeriodTypeEnum): PrePaidServerExtendParam {
        this['periodType'] = periodType;
        return this;
    }
    public withPeriodNum(periodNum: number): PrePaidServerExtendParam {
        this['periodNum'] = periodNum;
        return this;
    }
    public withIsAutoRenew(isAutoRenew: PrePaidServerExtendParamIsAutoRenewEnum): PrePaidServerExtendParam {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    public withIsAutoPay(isAutoPay: PrePaidServerExtendParamIsAutoPayEnum): PrePaidServerExtendParam {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PrePaidServerExtendParam {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withSupportAutoRecovery(supportAutoRecovery: boolean): PrePaidServerExtendParam {
        this['support_auto_recovery'] = supportAutoRecovery;
        return this;
    }
    public set supportAutoRecovery(supportAutoRecovery: boolean | undefined) {
        this['support_auto_recovery'] = supportAutoRecovery;
    }
    public get supportAutoRecovery() {
        return this['support_auto_recovery'];
    }
    public withMarketType(marketType: string): PrePaidServerExtendParam {
        this['marketType'] = marketType;
        return this;
    }
    public withSpotPrice(spotPrice: string): PrePaidServerExtendParam {
        this['spotPrice'] = spotPrice;
        return this;
    }
    public withDiskPrior(diskPrior: string): PrePaidServerExtendParam {
        this['diskPrior'] = diskPrior;
        return this;
    }
    public withSpotDurationHours(spotDurationHours: number): PrePaidServerExtendParam {
        this['spot_duration_hours'] = spotDurationHours;
        return this;
    }
    public set spotDurationHours(spotDurationHours: number | undefined) {
        this['spot_duration_hours'] = spotDurationHours;
    }
    public get spotDurationHours() {
        return this['spot_duration_hours'];
    }
    public withInterruptionPolicy(interruptionPolicy: PrePaidServerExtendParamInterruptionPolicyEnum): PrePaidServerExtendParam {
        this['interruption_policy'] = interruptionPolicy;
        return this;
    }
    public set interruptionPolicy(interruptionPolicy: PrePaidServerExtendParamInterruptionPolicyEnum | undefined) {
        this['interruption_policy'] = interruptionPolicy;
    }
    public get interruptionPolicy() {
        return this['interruption_policy'];
    }
    public withSpotDurationCount(spotDurationCount: number): PrePaidServerExtendParam {
        this['spot_duration_count'] = spotDurationCount;
        return this;
    }
    public set spotDurationCount(spotDurationCount: number | undefined) {
        this['spot_duration_count'] = spotDurationCount;
    }
    public get spotDurationCount() {
        return this['spot_duration_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrePaidServerExtendParamChargingModeEnum {
    PREPAID = 'prePaid',
    POSTPAID = 'postPaid'
}
/**
    * @export
    * @enum {string}
    */
export enum PrePaidServerExtendParamPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
/**
    * @export
    * @enum {string}
    */
export enum PrePaidServerExtendParamIsAutoRenewEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum PrePaidServerExtendParamIsAutoPayEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum PrePaidServerExtendParamInterruptionPolicyEnum {
    IMMEDIATE = 'immediate'
}
