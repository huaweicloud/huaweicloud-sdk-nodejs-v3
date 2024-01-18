

export class TopReferSummary {
    public refer?: string;
    public value?: number;
    public ratio?: number;
    public constructor() { 
    }
    public withRefer(refer: string): TopReferSummary {
        this['refer'] = refer;
        return this;
    }
    public withValue(value: number): TopReferSummary {
        this['value'] = value;
        return this;
    }
    public withRatio(ratio: number): TopReferSummary {
        this['ratio'] = ratio;
        return this;
    }
}