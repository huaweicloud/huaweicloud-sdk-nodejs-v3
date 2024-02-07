

export class CountGlobalEips {
    public count?: number;
    public constructor(count?: number) { 
        this['count'] = count;
    }
    public withCount(count: number): CountGlobalEips {
        this['count'] = count;
        return this;
    }
}