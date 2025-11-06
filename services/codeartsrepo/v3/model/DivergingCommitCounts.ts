

export class DivergingCommitCounts {
    public ahead?: number;
    public behind?: number;
    public constructor() { 
    }
    public withAhead(ahead: number): DivergingCommitCounts {
        this['ahead'] = ahead;
        return this;
    }
    public withBehind(behind: number): DivergingCommitCounts {
        this['behind'] = behind;
        return this;
    }
}