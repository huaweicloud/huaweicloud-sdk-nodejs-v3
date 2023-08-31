

export class PrePaidServerExtendParam {
    public chargingMode?: PrePaidServerExtendParamChargingModeEnum | string;
    public regionID?: string;
    public periodType?: PrePaidServerExtendParamPeriodTypeEnum | string;
    public periodNum?: number;
    public isAutoRenew?: PrePaidServerExtendParamIsAutoRenewEnum | string;
    public isAutoPay?: PrePaidServerExtendParamIsAutoPayEnum | string;
    private 'enterprise_project_id'?: string;
    private 'support_auto_recovery'?: boolean;
    public marketType?: string;
    public spotPrice?: string;
    public diskPrior?: string;
    private 'spot_duration_hours'?: number;
    private 'interruption_policy'?: PrePaidServerExtendParamInterruptionPolicyEnum | string;
    private 'CB_CSBS_BACKUP'?: string;
    private 'spot_duration_count'?: number;
    public constructor() { 
    }
    public withChargingMode(chargingMode: PrePaidServerExtendParamChargingModeEnum | string): PrePaidServerExtendParam {
        this['chargingMode'] = chargingMode;
        return this;
    }
    public withRegionID(regionID: string): PrePaidServerExtendParam {
        this['regionID'] = regionID;
        return this;
    }
    public withPeriodType(periodType: PrePaidServerExtendParamPeriodTypeEnum | string): PrePaidServerExtendParam {
        this['periodType'] = periodType;
        return this;
    }
    public withPeriodNum(periodNum: number): PrePaidServerExtendParam {
        this['periodNum'] = periodNum;
        return this;
    }
    public withIsAutoRenew(isAutoRenew: PrePaidServerExtendParamIsAutoRenewEnum | string): PrePaidServerExtendParam {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    public withIsAutoPay(isAutoPay: PrePaidServerExtendParamIsAutoPayEnum | string): PrePaidServerExtendParam {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PrePaidServerExtendParam {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSupportAutoRecovery(supportAutoRecovery: boolean): PrePaidServerExtendParam {
        this['support_auto_recovery'] = supportAutoRecovery;
        return this;
    }
    public set supportAutoRecovery(supportAutoRecovery: boolean  | undefined) {
        this['support_auto_recovery'] = supportAutoRecovery;
    }
    public get supportAutoRecovery(): boolean | undefined {
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
    public set spotDurationHours(spotDurationHours: number  | undefined) {
        this['spot_duration_hours'] = spotDurationHours;
    }
    public get spotDurationHours(): number | undefined {
        return this['spot_duration_hours'];
    }
    public withInterruptionPolicy(interruptionPolicy: PrePaidServerExtendParamInterruptionPolicyEnum | string): PrePaidServerExtendParam {
        this['interruption_policy'] = interruptionPolicy;
        return this;
    }
    public set interruptionPolicy(interruptionPolicy: PrePaidServerExtendParamInterruptionPolicyEnum | string  | undefined) {
        this['interruption_policy'] = interruptionPolicy;
    }
    public get interruptionPolicy(): PrePaidServerExtendParamInterruptionPolicyEnum | string | undefined {
        return this['interruption_policy'];
    }
    public withCbCsbsBackup(cbCsbsBackup: string): PrePaidServerExtendParam {
        this['CB_CSBS_BACKUP'] = cbCsbsBackup;
        return this;
    }
    public set cbCsbsBackup(cbCsbsBackup: string  | undefined) {
        this['CB_CSBS_BACKUP'] = cbCsbsBackup;
    }
    public get cbCsbsBackup(): string | undefined {
        return this['CB_CSBS_BACKUP'];
    }
    public withSpotDurationCount(spotDurationCount: number): PrePaidServerExtendParam {
        this['spot_duration_count'] = spotDurationCount;
        return this;
    }
    public set spotDurationCount(spotDurationCount: number  | undefined) {
        this['spot_duration_count'] = spotDurationCount;
    }
    public get spotDurationCount(): number | undefined {
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
