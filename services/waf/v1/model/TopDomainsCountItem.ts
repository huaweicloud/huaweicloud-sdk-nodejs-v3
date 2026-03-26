

export class TopDomainsCountItem {
    public key?: string;
    public num?: number;
    private 'web_tag'?: string;
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
    public withWebTag(webTag: string): TopDomainsCountItem {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string  | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag(): string | undefined {
        return this['web_tag'];
    }
}