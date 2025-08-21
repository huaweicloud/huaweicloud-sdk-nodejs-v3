

export class DivergingCommitCounts {
    public behind?: number;
    public ahead?: number;
    public constructor() { 
    }
    public withBehind(behind: number): DivergingCommitCounts {
        this['behind'] = behind;
        return this;
    }
    public withAhead(ahead: number): DivergingCommitCounts {
        this['ahead'] = ahead;
        return this;
    }
}