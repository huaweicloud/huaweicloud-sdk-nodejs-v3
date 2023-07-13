

export class DomainItem {
    public key?: string;
    public num?: number;
    private 'web_tag'?: string | undefined;
    public constructor() { 
    }
    public withKey(key: string): DomainItem {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): DomainItem {
        this['num'] = num;
        return this;
    }
    public withWebTag(webTag: string): DomainItem {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag() {
        return this['web_tag'];
    }
}