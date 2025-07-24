

export class ShareTypeUsageBandwidth {
    public total?: number;
    public usage?: number;
    public constructor() { 
    }
    public withTotal(total: number): ShareTypeUsageBandwidth {
        this['total'] = total;
        return this;
    }
    public withUsage(usage: number): ShareTypeUsageBandwidth {
        this['usage'] = usage;
        return this;
    }
}