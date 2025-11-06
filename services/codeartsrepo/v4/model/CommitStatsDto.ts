

export class CommitStatsDto {
    public additions?: number;
    public deletions?: number;
    public total?: number;
    public constructor() { 
    }
    public withAdditions(additions: number): CommitStatsDto {
        this['additions'] = additions;
        return this;
    }
    public withDeletions(deletions: number): CommitStatsDto {
        this['deletions'] = deletions;
        return this;
    }
    public withTotal(total: number): CommitStatsDto {
        this['total'] = total;
        return this;
    }
}