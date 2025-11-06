

export class CreateCommitResponseBodyStats {
    public additions?: number;
    public deletions?: number;
    public total?: number;
    public constructor() { 
    }
    public withAdditions(additions: number): CreateCommitResponseBodyStats {
        this['additions'] = additions;
        return this;
    }
    public withDeletions(deletions: number): CreateCommitResponseBodyStats {
        this['deletions'] = deletions;
        return this;
    }
    public withTotal(total: number): CreateCommitResponseBodyStats {
        this['total'] = total;
        return this;
    }
}