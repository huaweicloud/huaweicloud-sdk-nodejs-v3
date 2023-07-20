

export class ExpandInstanceNodeRequestBody {
    public num?: number;
    private 'subnet_id'?: string;
    private 'is_auto_pay'?: string;
    public constructor(num?: number) { 
        this['num'] = num;
    }
    public withNum(num: number): ExpandInstanceNodeRequestBody {
        this['num'] = num;
        return this;
    }
    public withSubnetId(subnetId: string): ExpandInstanceNodeRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIsAutoPay(isAutoPay: string): ExpandInstanceNodeRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): string | undefined {
        return this['is_auto_pay'];
    }
}