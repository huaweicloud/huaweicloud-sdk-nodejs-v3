import { PoolNodeAz } from './PoolNodeAz';


export class PoolSpecUpdateResources {
    public flavor?: string;
    public count?: number;
    public azs?: Array<PoolNodeAz>;
    public constructor(flavor?: string, count?: number) { 
        this['flavor'] = flavor;
        this['count'] = count;
    }
    public withFlavor(flavor: string): PoolSpecUpdateResources {
        this['flavor'] = flavor;
        return this;
    }
    public withCount(count: number): PoolSpecUpdateResources {
        this['count'] = count;
        return this;
    }
    public withAzs(azs: Array<PoolNodeAz>): PoolSpecUpdateResources {
        this['azs'] = azs;
        return this;
    }
}