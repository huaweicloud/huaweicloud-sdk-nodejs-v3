

export class UserAgentFilter {
    public type?: string;
    public value?: string;
    private 'ua_list'?: Array<string>;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): UserAgentFilter {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): UserAgentFilter {
        this['value'] = value;
        return this;
    }
    public withUaList(uaList: Array<string>): UserAgentFilter {
        this['ua_list'] = uaList;
        return this;
    }
    public set uaList(uaList: Array<string>  | undefined) {
        this['ua_list'] = uaList;
    }
    public get uaList(): Array<string> | undefined {
        return this['ua_list'];
    }
}