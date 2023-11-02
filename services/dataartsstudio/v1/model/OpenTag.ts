

export class OpenTag {
    public name?: string;
    public description?: string;
    private 'tag_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'create_user'?: string;
    private 'domain_id'?: string;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    private 'create_user_id'?: string;
    public constructor(name?: string, description?: string, tagId?: string) { 
        this['name'] = name;
        this['description'] = description;
        this['tag_id'] = tagId;
    }
    public withName(name: string): OpenTag {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): OpenTag {
        this['description'] = description;
        return this;
    }
    public withTagId(tagId: string): OpenTag {
        this['tag_id'] = tagId;
        return this;
    }
    public set tagId(tagId: string  | undefined) {
        this['tag_id'] = tagId;
    }
    public get tagId(): string | undefined {
        return this['tag_id'];
    }
    public withCreateTime(createTime: number): OpenTag {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): OpenTag {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withCreateUser(createUser: string): OpenTag {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withDomainId(domainId: string): OpenTag {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withInstanceId(instanceId: string): OpenTag {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): OpenTag {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreateUserId(createUserId: string): OpenTag {
        this['create_user_id'] = createUserId;
        return this;
    }
    public set createUserId(createUserId: string  | undefined) {
        this['create_user_id'] = createUserId;
    }
    public get createUserId(): string | undefined {
        return this['create_user_id'];
    }
}