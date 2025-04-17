

export class ApplicationQueryResponseData {
    public id?: string;
    public name?: string;
    public code?: string;
    private 'domain_id'?: string;
    private 'parent_id'?: string;
    public description?: string;
    public path?: string;
    private 'is_collection'?: boolean;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): ApplicationQueryResponseData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApplicationQueryResponseData {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): ApplicationQueryResponseData {
        this['code'] = code;
        return this;
    }
    public withDomainId(domainId: string): ApplicationQueryResponseData {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withParentId(parentId: string): ApplicationQueryResponseData {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withDescription(description: string): ApplicationQueryResponseData {
        this['description'] = description;
        return this;
    }
    public withPath(path: string): ApplicationQueryResponseData {
        this['path'] = path;
        return this;
    }
    public withIsCollection(isCollection: boolean): ApplicationQueryResponseData {
        this['is_collection'] = isCollection;
        return this;
    }
    public set isCollection(isCollection: boolean  | undefined) {
        this['is_collection'] = isCollection;
    }
    public get isCollection(): boolean | undefined {
        return this['is_collection'];
    }
    public withCreateTime(createTime: string): ApplicationQueryResponseData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ApplicationQueryResponseData {
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