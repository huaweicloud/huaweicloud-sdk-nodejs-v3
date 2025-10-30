

export class CustomTimeInfo {
    public enable?: boolean;
    public key?: string;
    public value?: string;
    private 'time_format'?: string;
    public constructor() { 
    }
    public withEnable(enable: boolean): CustomTimeInfo {
        this['enable'] = enable;
        return this;
    }
    public withKey(key: string): CustomTimeInfo {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CustomTimeInfo {
        this['value'] = value;
        return this;
    }
    public withTimeFormat(timeFormat: string): CustomTimeInfo {
        this['time_format'] = timeFormat;
        return this;
    }
    public set timeFormat(timeFormat: string  | undefined) {
        this['time_format'] = timeFormat;
    }
    public get timeFormat(): string | undefined {
        return this['time_format'];
    }
}