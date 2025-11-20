

export class InstanceConfig {
    public tags?: Array<string>;
    private 'freeze_type'?: Array<number>;
    public constructor() { 
    }
    public withTags(tags: Array<string>): InstanceConfig {
        this['tags'] = tags;
        return this;
    }
    public withFreezeType(freezeType: Array<number>): InstanceConfig {
        this['freeze_type'] = freezeType;
        return this;
    }
    public set freezeType(freezeType: Array<number>  | undefined) {
        this['freeze_type'] = freezeType;
    }
    public get freezeType(): Array<number> | undefined {
        return this['freeze_type'];
    }
}