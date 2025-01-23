

export class UpgradePrepaidOption {
    private 'period_type'?: UpgradePrepaidOptionPeriodTypeEnum | string;
    private 'period_num'?: number;
    private 'resource_package_type'?: Array<string>;
    private 'auto_pay'?: boolean;
    public constructor(periodType?: string, resourcePackageType?: Array<string>) { 
        this['period_type'] = periodType;
        this['resource_package_type'] = resourcePackageType;
    }
    public withPeriodType(periodType: UpgradePrepaidOptionPeriodTypeEnum | string): UpgradePrepaidOption {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: UpgradePrepaidOptionPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): UpgradePrepaidOptionPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): UpgradePrepaidOption {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withResourcePackageType(resourcePackageType: Array<string>): UpgradePrepaidOption {
        this['resource_package_type'] = resourcePackageType;
        return this;
    }
    public set resourcePackageType(resourcePackageType: Array<string>  | undefined) {
        this['resource_package_type'] = resourcePackageType;
    }
    public get resourcePackageType(): Array<string> | undefined {
        return this['resource_package_type'];
    }
    public withAutoPay(autoPay: boolean): UpgradePrepaidOption {
        this['auto_pay'] = autoPay;
        return this;
    }
    public set autoPay(autoPay: boolean  | undefined) {
        this['auto_pay'] = autoPay;
    }
    public get autoPay(): boolean | undefined {
        return this['auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpgradePrepaidOptionPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
