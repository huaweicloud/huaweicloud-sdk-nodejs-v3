

export class IpItem {
    public key?: string;
    public num?: number;
    public constructor() { 
    }
    public withKey(key: string): IpItem {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): IpItem {
        this['num'] = num;
        return this;
    }
}