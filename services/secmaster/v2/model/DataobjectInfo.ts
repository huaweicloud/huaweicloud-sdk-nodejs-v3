

export class DataobjectInfo {
    public id?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'project_id'?: string;
    private 'dataclass_id'?: string;
    public name?: string;
    public content?: string;
    public constructor() { 
    }
    public withId(id: string): DataobjectInfo {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: string): DataobjectInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): DataobjectInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withProjectId(projectId: string): DataobjectInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDataclassId(dataclassId: string): DataobjectInfo {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withName(name: string): DataobjectInfo {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): DataobjectInfo {
        this['content'] = content;
        return this;
    }
}