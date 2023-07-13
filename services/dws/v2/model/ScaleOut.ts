

export class ScaleOut {
    public count: number;
    public constructor(count?: any) { 
        this['count'] = count;
    }
    public withCount(count: number): ScaleOut {
        this['count'] = count;
        return this;
    }
}