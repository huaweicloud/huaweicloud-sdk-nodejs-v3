

export class ListPipelinesPageTagList {
    private 'tag_id'?: string;
    public name?: string;
    public color?: string;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    private 'creator_id'?: string;
    private 'updater_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withTagId(tagId: string): ListPipelinesPageTagList {
        this['tag_id'] = tagId;
        return this;
    }
    public set tagId(tagId: string  | undefined) {
        this['tag_id'] = tagId;
    }
    public get tagId(): string | undefined {
        return this['tag_id'];
    }
    public withName(name: string): ListPipelinesPageTagList {
        this['name'] = name;
        return this;
    }
    public withColor(color: string): ListPipelinesPageTagList {
        this['color'] = color;
        return this;
    }
    public withProjectId(projectId: string): ListPipelinesPageTagList {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): ListPipelinesPageTagList {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCreatorId(creatorId: string): ListPipelinesPageTagList {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withUpdaterId(updaterId: string): ListPipelinesPageTagList {
        this['updater_id'] = updaterId;
        return this;
    }
    public set updaterId(updaterId: string  | undefined) {
        this['updater_id'] = updaterId;
    }
    public get updaterId(): string | undefined {
        return this['updater_id'];
    }
    public withCreateTime(createTime: number): ListPipelinesPageTagList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ListPipelinesPageTagList {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}