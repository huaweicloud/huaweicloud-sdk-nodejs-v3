

export class PoolNodeAz {
    public az?: string;
    public count?: number;
    public constructor(az?: string, count?: number) { 
        this['az'] = az;
        this['count'] = count;
    }
    public withAz(az: string): PoolNodeAz {
        this['az'] = az;
        return this;
    }
    public withCount(count: number): PoolNodeAz {
        this['count'] = count;
        return this;
    }
}