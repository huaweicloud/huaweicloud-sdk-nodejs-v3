

export class ScriptSimpleInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    public type?: string;
    public version?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): ScriptSimpleInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ScriptSimpleInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ScriptSimpleInfo {
        this['description'] = description;
        return this;
    }
    public withType(type: string): ScriptSimpleInfo {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ScriptSimpleInfo {
        this['version'] = version;
        return this;
    }
    public withCreateTime(createTime: Date): ScriptSimpleInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ScriptSimpleInfo {
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