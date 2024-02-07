

export class CountInternetBandwidths {
    public count?: number;
    public constructor(count?: number) { 
        this['count'] = count;
    }
    public withCount(count: number): CountInternetBandwidths {
        this['count'] = count;
        return this;
    }
}