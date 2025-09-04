

export class JobGroupResponseBodyResult {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'parent_id'?: string;
    private 'group_id'?: string;
    private 'domain_id'?: string;
    public ordinal?: string;
    private 'create_user'?: string;
    private 'update_user'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'path_id'?: string;
    public constructor() { 
    }
    public withId(id: string): JobGroupResponseBodyResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobGroupResponseBodyResult {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): JobGroupResponseBodyResult {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withParentId(parentId: string): JobGroupResponseBodyResult {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withGroupId(groupId: string): JobGroupResponseBodyResult {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withDomainId(domainId: string): JobGroupResponseBodyResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withOrdinal(ordinal: string): JobGroupResponseBodyResult {
        this['ordinal'] = ordinal;
        return this;
    }
    public withCreateUser(createUser: string): JobGroupResponseBodyResult {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateUser(updateUser: string): JobGroupResponseBodyResult {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withCreateTime(createTime: string): JobGroupResponseBodyResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): JobGroupResponseBodyResult {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withPathId(pathId: string): JobGroupResponseBodyResult {
        this['path_id'] = pathId;
        return this;
    }
    public set pathId(pathId: string  | undefined) {
        this['path_id'] = pathId;
    }
    public get pathId(): string | undefined {
        return this['path_id'];
    }
}