import { PoolNodeAz } from './PoolNodeAz';


export class PoolResourceFlavorCount {
    public flavor?: string;
    public count?: number;
    public maxCount?: number;
    public azs?: Array<PoolNodeAz>;
    public nodePool?: string;
    public constructor(flavor?: string, count?: number, maxCount?: number) { 
        this['flavor'] = flavor;
        this['count'] = count;
        this['maxCount'] = maxCount;
    }
    public withFlavor(flavor: string): PoolResourceFlavorCount {
        this['flavor'] = flavor;
        return this;
    }
    public withCount(count: number): PoolResourceFlavorCount {
        this['count'] = count;
        return this;
    }
    public withMaxCount(maxCount: number): PoolResourceFlavorCount {
        this['maxCount'] = maxCount;
        return this;
    }
    public withAzs(azs: Array<PoolNodeAz>): PoolResourceFlavorCount {
        this['azs'] = azs;
        return this;
    }
    public withNodePool(nodePool: string): PoolResourceFlavorCount {
        this['nodePool'] = nodePool;
        return this;
    }
}