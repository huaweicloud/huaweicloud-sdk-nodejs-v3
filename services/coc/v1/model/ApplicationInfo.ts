

export class ApplicationInfo {
    public id?: string;
    public name?: string;
    public code?: string;
    public description?: string;
    private 'domain_id'?: string;
    private 'parent_id'?: string;
    public path?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): ApplicationInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApplicationInfo {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): ApplicationInfo {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): ApplicationInfo {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): ApplicationInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withParentId(parentId: string): ApplicationInfo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withPath(path: string): ApplicationInfo {
        this['path'] = path;
        return this;
    }
    public withCreateTime(createTime: string): ApplicationInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ApplicationInfo {
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