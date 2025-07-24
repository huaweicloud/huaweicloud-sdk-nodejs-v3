

export class Template {
    private 'create_time'?: string;
    private 'creator_name'?: string;
    private 'creator_num'?: string;
    public description?: string;
    public id?: string;
    private 'is_default'?: string;
    public mindmap?: string;
    public name?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: string): Template {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): Template {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatorNum(creatorNum: string): Template {
        this['creator_num'] = creatorNum;
        return this;
    }
    public set creatorNum(creatorNum: string  | undefined) {
        this['creator_num'] = creatorNum;
    }
    public get creatorNum(): string | undefined {
        return this['creator_num'];
    }
    public withDescription(description: string): Template {
        this['description'] = description;
        return this;
    }
    public withId(id: string): Template {
        this['id'] = id;
        return this;
    }
    public withIsDefault(isDefault: string): Template {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: string  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): string | undefined {
        return this['is_default'];
    }
    public withMindmap(mindmap: string): Template {
        this['mindmap'] = mindmap;
        return this;
    }
    public withName(name: string): Template {
        this['name'] = name;
        return this;
    }
    public withUpdateTime(updateTime: string): Template {
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