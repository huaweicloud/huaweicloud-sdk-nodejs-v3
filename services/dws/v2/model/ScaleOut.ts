

export class ScaleOut {
    public count?: number;
    public constructor(count?: number) { 
        this['count'] = count;
    }
    public withCount(count: number): ScaleOut {
        this['count'] = count;
        return this;
    }
}