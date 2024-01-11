

export class StatusStatistics {
    public active?: number;
    public total?: number;
    public constructor() { 
    }
    public withActive(active: number): StatusStatistics {
        this['active'] = active;
        return this;
    }
    public withTotal(total: number): StatusStatistics {
        this['total'] = total;
        return this;
    }
}