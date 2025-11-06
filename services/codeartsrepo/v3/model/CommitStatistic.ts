

export class CommitStatistic {
    public additions?: number;
    public deletions?: number;
    public constructor() { 
    }
    public withAdditions(additions: number): CommitStatistic {
        this['additions'] = additions;
        return this;
    }
    public withDeletions(deletions: number): CommitStatistic {
        this['deletions'] = deletions;
        return this;
    }
}