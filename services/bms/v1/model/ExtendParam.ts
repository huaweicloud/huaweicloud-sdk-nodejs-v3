

export class ExtendParam {
    public chargingMode?: ExtendParamChargingModeEnum | string;
    public regionID?: string;
    public periodType?: ExtendParamPeriodTypeEnum | string;
    public periodNum?: number;
    public isAutoRenew?: string;
    public isAutoPay?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withChargingMode(chargingMode: ExtendParamChargingModeEnum | string): ExtendParam {
        this['chargingMode'] = chargingMode;
        return this;
    }
    public withRegionID(regionID: string): ExtendParam {
        this['regionID'] = regionID;
        return this;
    }
    public withPeriodType(periodType: ExtendParamPeriodTypeEnum | string): ExtendParam {
        this['periodType'] = periodType;
        return this;
    }
    public withPeriodNum(periodNum: number): ExtendParam {
        this['periodNum'] = periodNum;
        return this;
    }
    public withIsAutoRenew(isAutoRenew: string): ExtendParam {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    public withIsAutoPay(isAutoPay: string): ExtendParam {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExtendParam {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExtendParamChargingModeEnum {
    PREPAID = 'prePaid'
}
/**
    * @export
    * @enum {string}
    */
export enum ExtendParamPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
