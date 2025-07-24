

export class ShareTypeUsageQuantity {
    public total?: number;
    public usage?: number;
    public constructor() { 
    }
    public withTotal(total: number): ShareTypeUsageQuantity {
        this['total'] = total;
        return this;
    }
    public withUsage(usage: number): ShareTypeUsageQuantity {
        this['usage'] = usage;
        return this;
    }
}