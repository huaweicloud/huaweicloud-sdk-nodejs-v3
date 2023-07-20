

export class MysqlCreateReadonlyNodeRequest {
    public priorities?: Array<number>;
    private 'is_auto_pay'?: string;
    public constructor(priorities?: Array<number>) { 
        this['priorities'] = priorities;
    }
    public withPriorities(priorities: Array<number>): MysqlCreateReadonlyNodeRequest {
        this['priorities'] = priorities;
        return this;
    }
    public withIsAutoPay(isAutoPay: string): MysqlCreateReadonlyNodeRequest {
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