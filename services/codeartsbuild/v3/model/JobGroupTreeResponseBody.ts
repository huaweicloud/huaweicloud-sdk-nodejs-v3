

export class JobGroupTreeResponseBody {
    public id?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    public name?: string;
    private 'parent_id'?: string;
    private 'path_id'?: string;
    public ordinal?: number;
    private 'create_user'?: string;
    private 'update_user'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public children?: Array<JobGroupTreeResponseBody>;
    public constructor() { 
    }
    public withId(id: string): JobGroupTreeResponseBody {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): JobGroupTreeResponseBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): JobGroupTreeResponseBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): JobGroupTreeResponseBody {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): JobGroupTreeResponseBody {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withPathId(pathId: string): JobGroupTreeResponseBody {
        this['path_id'] = pathId;
        return this;
    }
    public set pathId(pathId: string  | undefined) {
        this['path_id'] = pathId;
    }
    public get pathId(): string | undefined {
        return this['path_id'];
    }
    public withOrdinal(ordinal: number): JobGroupTreeResponseBody {
        this['ordinal'] = ordinal;
        return this;
    }
    public withCreateUser(createUser: string): JobGroupTreeResponseBody {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateUser(updateUser: string): JobGroupTreeResponseBody {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withCreateTime(createTime: string): JobGroupTreeResponseBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): JobGroupTreeResponseBody {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withChildren(children: Array<JobGroupTreeResponseBody>): JobGroupTreeResponseBody {
        this['children'] = children;
        return this;
    }
}