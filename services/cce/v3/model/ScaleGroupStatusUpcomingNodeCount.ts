

export class ScaleGroupStatusUpcomingNodeCount {
    public postPaid?: number;
    public prePaid?: number;
    public total?: number;
    public constructor() { 
    }
    public withPostPaid(postPaid: number): ScaleGroupStatusUpcomingNodeCount {
        this['postPaid'] = postPaid;
        return this;
    }
    public withPrePaid(prePaid: number): ScaleGroupStatusUpcomingNodeCount {
        this['prePaid'] = prePaid;
        return this;
    }
    public withTotal(total: number): ScaleGroupStatusUpcomingNodeCount {
        this['total'] = total;
        return this;
    }
}