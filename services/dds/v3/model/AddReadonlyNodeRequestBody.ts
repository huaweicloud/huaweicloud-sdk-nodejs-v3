

export class AddReadonlyNodeRequestBody {
    private 'spec_code'?: string;
    public num?: number;
    public delay?: number;
    private 'is_auto_pay'?: boolean;
    private 'group_id'?: string;
    private 'availability_zone'?: string;
    public constructor(specCode?: string, num?: number) { 
        this['spec_code'] = specCode;
        this['num'] = num;
    }
    public withSpecCode(specCode: string): AddReadonlyNodeRequestBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withNum(num: number): AddReadonlyNodeRequestBody {
        this['num'] = num;
        return this;
    }
    public withDelay(delay: number): AddReadonlyNodeRequestBody {
        this['delay'] = delay;
        return this;
    }
    public withIsAutoPay(isAutoPay: boolean): AddReadonlyNodeRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withGroupId(groupId: string): AddReadonlyNodeRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withAvailabilityZone(availabilityZone: string): AddReadonlyNodeRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
}