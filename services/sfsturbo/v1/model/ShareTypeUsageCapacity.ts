

export class ShareTypeUsageCapacity {
    public total?: number;
    public usage?: number;
    public constructor() { 
    }
    public withTotal(total: number): ShareTypeUsageCapacity {
        this['total'] = total;
        return this;
    }
    public withUsage(usage: number): ShareTypeUsageCapacity {
        this['usage'] = usage;
        return this;
    }
}