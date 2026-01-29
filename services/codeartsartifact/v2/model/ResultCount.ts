

export class ResultCount {
    public count?: number;
    public constructor() { 
    }
    public withCount(count: number): ResultCount {
        this['count'] = count;
        return this;
    }
}