

export class ScaleGroupStatusExistingNodeCount {
    public postPaid?: number;
    public prePaid?: number;
    public total?: number;
    public constructor() { 
    }
    public withPostPaid(postPaid: number): ScaleGroupStatusExistingNodeCount {
        this['postPaid'] = postPaid;
        return this;
    }
    public withPrePaid(prePaid: number): ScaleGroupStatusExistingNodeCount {
        this['prePaid'] = prePaid;
        return this;
    }
    public withTotal(total: number): ScaleGroupStatusExistingNodeCount {
        this['total'] = total;
        return this;
    }
}