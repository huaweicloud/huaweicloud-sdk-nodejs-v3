

export class CountItem {
    public key?: string;
    public num?: number;
    public constructor() { 
    }
    public withKey(key: string): CountItem {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): CountItem {
        this['num'] = num;
        return this;
    }
}