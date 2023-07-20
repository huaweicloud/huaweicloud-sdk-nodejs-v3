

export class EnlargeReplicasetNodeRequestBody {
    public num?: number;
    private 'is_auto_pay'?: boolean;
    public constructor(num?: number) { 
        this['num'] = num;
    }
    public withNum(num: number): EnlargeReplicasetNodeRequestBody {
        this['num'] = num;
        return this;
    }
    public withIsAutoPay(isAutoPay: boolean): EnlargeReplicasetNodeRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
}