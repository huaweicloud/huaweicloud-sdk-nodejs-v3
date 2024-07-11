

export class TopReferSummary {
    public refer?: string;
    public value?: number;
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
}