

export class AppGroupsEntity {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    public path?: string;
    private 'parent_id'?: string;
    public ordinal?: number;
    private 'create_user_id'?: string;
    private 'last_update_user_id'?: string;
    public count?: number;
    public children?: Array<AppGroupsEntity>;
    public constructor() { 
    }
    public withId(id: string): AppGroupsEntity {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppGroupsEntity {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): AppGroupsEntity {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPath(path: string): AppGroupsEntity {
        this['path'] = path;
        return this;
    }
    public withParentId(parentId: string): AppGroupsEntity {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withOrdinal(ordinal: number): AppGroupsEntity {
        this['ordinal'] = ordinal;
        return this;
    }
    public withCreateUserId(createUserId: string): AppGroupsEntity {
        this['create_user_id'] = createUserId;
        return this;
    }
    public set createUserId(createUserId: string  | undefined) {
        this['create_user_id'] = createUserId;
    }
    public get createUserId(): string | undefined {
        return this['create_user_id'];
    }
    public withLastUpdateUserId(lastUpdateUserId: string): AppGroupsEntity {
        this['last_update_user_id'] = lastUpdateUserId;
        return this;
    }
    public set lastUpdateUserId(lastUpdateUserId: string  | undefined) {
        this['last_update_user_id'] = lastUpdateUserId;
    }
    public get lastUpdateUserId(): string | undefined {
        return this['last_update_user_id'];
    }
    public withCount(count: number): AppGroupsEntity {
        this['count'] = count;
        return this;
    }
    public withChildren(children: Array<AppGroupsEntity>): AppGroupsEntity {
        this['children'] = children;
        return this;
    }
}