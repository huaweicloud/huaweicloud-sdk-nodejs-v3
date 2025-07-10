

export class SpecificCommitInfoStats {
    public additions?: number;
    public deletions?: number;
    public total?: number;
    public constructor() { 
    }
    public withAdditions(additions: number): SpecificCommitInfoStats {
        this['additions'] = additions;
        return this;
    }
    public withDeletions(deletions: number): SpecificCommitInfoStats {
        this['deletions'] = deletions;
        return this;
    }
    public withTotal(total: number): SpecificCommitInfoStats {
        this['total'] = total;
        return this;
    }
}