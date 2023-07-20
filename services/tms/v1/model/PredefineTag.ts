

export class PredefineTag {
    public key?: string;
    public value?: string;
    private 'update_time'?: Date;
    public constructor(key?: string, value?: string, updateTime?: Date) { 
        this['key'] = key;
        this['value'] = value;
        this['update_time'] = updateTime;
    }
    public withKey(key: string): PredefineTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): PredefineTag {
        this['value'] = value;
        return this;
    }
    public withUpdateTime(updateTime: Date): PredefineTag {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}