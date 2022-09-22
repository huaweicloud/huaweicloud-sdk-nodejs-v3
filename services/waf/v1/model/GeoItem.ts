

export class GeoItem {
    public key?: string;
    public num?: number;
    public constructor() { 
    }
    public withKey(key: string): GeoItem {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): GeoItem {
        this['num'] = num;
        return this;
    }
}