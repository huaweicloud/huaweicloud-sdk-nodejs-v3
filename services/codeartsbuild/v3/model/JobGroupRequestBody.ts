

export class JobGroupRequestBody {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'parent_id'?: string;
    private 'group_id'?: string;
    public constructor() { 
    }
    public withId(id: string): JobGroupRequestBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobGroupRequestBody {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): JobGroupRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withParentId(parentId: string): JobGroupRequestBody {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withGroupId(groupId: string): JobGroupRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}