

export class UrlCountItem {
    public key?: string;
    public num?: number;
    public host?: string;
    public constructor() { 
    }
    public withKey(key: string): UrlCountItem {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): UrlCountItem {
        this['num'] = num;
        return this;
    }
    public withHost(host: string): UrlCountItem {
        this['host'] = host;
        return this;
    }
}