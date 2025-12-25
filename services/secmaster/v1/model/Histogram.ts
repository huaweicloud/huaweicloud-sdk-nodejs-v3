

export class Histogram {
    public count?: number;
    public from?: number;
    public to?: number;
    public constructor(count?: number, from?: number, to?: number) { 
        this['count'] = count;
        this['from'] = from;
        this['to'] = to;
    }
    public withCount(count: number): Histogram {
        this['count'] = count;
        return this;
    }
    public withFrom(from: number): Histogram {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): Histogram {
        this['to'] = to;
        return this;
    }
}