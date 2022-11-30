

export class UrlItem {
    public key?: string;
    public num?: number;
    public host?: string;
    public constructor() { 
    }
    public withKey(key: string): UrlItem {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): UrlItem {
        this['num'] = num;
        return this;
    }
    public withHost(host: string): UrlItem {
        this['host'] = host;
        return this;
    }
}