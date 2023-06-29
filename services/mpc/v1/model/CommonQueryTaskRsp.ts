

export class CommonQueryTaskRsp {
    public total?: number;
    public constructor() { 
    }
    public withTotal(total: number): CommonQueryTaskRsp {
        this['total'] = total;
        return this;
    }
}