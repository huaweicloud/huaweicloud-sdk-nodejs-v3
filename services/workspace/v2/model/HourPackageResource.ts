import { CreateDesktopReq } from './CreateDesktopReq';


export class HourPackageResource {
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'is_auto_renew'?: number;
    private 'used_up_policy'?: HourPackageResourceUsedUpPolicyEnum | string;
    private 'create_desktops'?: CreateDesktopReq;
    public constructor() { 
    }
    public withPeriodType(periodType: number): HourPackageResource {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): HourPackageResource {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: number): HourPackageResource {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withUsedUpPolicy(usedUpPolicy: HourPackageResourceUsedUpPolicyEnum | string): HourPackageResource {
        this['used_up_policy'] = usedUpPolicy;
        return this;
    }
    public set usedUpPolicy(usedUpPolicy: HourPackageResourceUsedUpPolicyEnum | string  | undefined) {
        this['used_up_policy'] = usedUpPolicy;
    }
    public get usedUpPolicy(): HourPackageResourceUsedUpPolicyEnum | string | undefined {
        return this['used_up_policy'];
    }
    public withCreateDesktops(createDesktops: CreateDesktopReq): HourPackageResource {
        this['create_desktops'] = createDesktops;
        return this;
    }
    public set createDesktops(createDesktops: CreateDesktopReq  | undefined) {
        this['create_desktops'] = createDesktops;
    }
    public get createDesktops(): CreateDesktopReq | undefined {
        return this['create_desktops'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HourPackageResourceUsedUpPolicyEnum {
    SHUTDOWN_OR_HIBERNATE = 'SHUTDOWN_OR_HIBERNATE',
    PAY_PER_USE = 'PAY_PER_USE'
}
