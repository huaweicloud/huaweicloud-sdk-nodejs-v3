

export class TopDomainsCountItem {
    public key?: string;
    public num?: number;
    public constructor() { 
    }
    public withKey(key: string): TopDomainsCountItem {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): TopDomainsCountItem {
        this['num'] = num;
        return this;
    }
}