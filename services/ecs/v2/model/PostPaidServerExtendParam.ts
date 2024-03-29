

export class PostPaidServerExtendParam {
    public chargingMode?: number;
    public regionID?: string;
    private 'support_auto_recovery'?: boolean;
    private 'enterprise_project_id'?: string;
    public marketType?: string;
    public spotPrice?: string;
    public diskPrior?: string;
    private 'spot_duration_hours'?: number;
    private 'interruption_policy'?: PostPaidServerExtendParamInterruptionPolicyEnum | string;
    private 'spot_duration_count'?: number;
    private 'CB_CSBS_BACKUP'?: string;
    public constructor() { 
    }
    public withChargingMode(chargingMode: number): PostPaidServerExtendParam {
        this['chargingMode'] = chargingMode;
        return this;
    }
    public withRegionID(regionID: string): PostPaidServerExtendParam {
        this['regionID'] = regionID;
        return this;
    }
    public withSupportAutoRecovery(supportAutoRecovery: boolean): PostPaidServerExtendParam {
        this['support_auto_recovery'] = supportAutoRecovery;
        return this;
    }
    public set supportAutoRecovery(supportAutoRecovery: boolean  | undefined) {
        this['support_auto_recovery'] = supportAutoRecovery;
    }
    public get supportAutoRecovery(): boolean | undefined {
        return this['support_auto_recovery'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PostPaidServerExtendParam {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withMarketType(marketType: string): PostPaidServerExtendParam {
        this['marketType'] = marketType;
        return this;
    }
    public withSpotPrice(spotPrice: string): PostPaidServerExtendParam {
        this['spotPrice'] = spotPrice;
        return this;
    }
    public withDiskPrior(diskPrior: string): PostPaidServerExtendParam {
        this['diskPrior'] = diskPrior;
        return this;
    }
    public withSpotDurationHours(spotDurationHours: number): PostPaidServerExtendParam {
        this['spot_duration_hours'] = spotDurationHours;
        return this;
    }
    public set spotDurationHours(spotDurationHours: number  | undefined) {
        this['spot_duration_hours'] = spotDurationHours;
    }
    public get spotDurationHours(): number | undefined {
        return this['spot_duration_hours'];
    }
    public withInterruptionPolicy(interruptionPolicy: PostPaidServerExtendParamInterruptionPolicyEnum | string): PostPaidServerExtendParam {
        this['interruption_policy'] = interruptionPolicy;
        return this;
    }
    public set interruptionPolicy(interruptionPolicy: PostPaidServerExtendParamInterruptionPolicyEnum | string  | undefined) {
        this['interruption_policy'] = interruptionPolicy;
    }
    public get interruptionPolicy(): PostPaidServerExtendParamInterruptionPolicyEnum | string | undefined {
        return this['interruption_policy'];
    }
    public withSpotDurationCount(spotDurationCount: number): PostPaidServerExtendParam {
        this['spot_duration_count'] = spotDurationCount;
        return this;
    }
    public set spotDurationCount(spotDurationCount: number  | undefined) {
        this['spot_duration_count'] = spotDurationCount;
    }
    public get spotDurationCount(): number | undefined {
        return this['spot_duration_count'];
    }
    public withCbCsbsBackup(cbCsbsBackup: string): PostPaidServerExtendParam {
        this['CB_CSBS_BACKUP'] = cbCsbsBackup;
        return this;
    }
    public set cbCsbsBackup(cbCsbsBackup: string  | undefined) {
        this['CB_CSBS_BACKUP'] = cbCsbsBackup;
    }
    public get cbCsbsBackup(): string | undefined {
        return this['CB_CSBS_BACKUP'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PostPaidServerExtendParamInterruptionPolicyEnum {
    IMMEDIATE = 'immediate'
}
