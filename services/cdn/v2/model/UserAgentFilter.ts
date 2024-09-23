

export class UserAgentFilter {
    public type?: string;
    public value?: string;
    private 'include_empty'?: boolean;
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
    public withIncludeEmpty(includeEmpty: boolean): UserAgentFilter {
        this['include_empty'] = includeEmpty;
        return this;
    }
    public set includeEmpty(includeEmpty: boolean  | undefined) {
        this['include_empty'] = includeEmpty;
    }
    public get includeEmpty(): boolean | undefined {
        return this['include_empty'];
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