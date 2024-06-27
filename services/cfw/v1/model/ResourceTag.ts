

export class ResourceTag {
    public key?: string;
    public value?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withKey(key: string): ResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceTag {
        this['value'] = value;
        return this;
    }
    public withUpdateTime(updateTime: string): ResourceTag {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}