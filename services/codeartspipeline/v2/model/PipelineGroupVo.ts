

export class PipelineGroupVo {
    public id?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    public name?: string;
    private 'parent_id'?: string;
    private 'path_id'?: string;
    public ordinal?: number;
    public creator?: string;
    public updater?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public children?: Array<PipelineGroupVo>;
    public constructor(id?: string, domainId?: string, projectId?: string, name?: string, pathId?: string, creator?: string) { 
        this['id'] = id;
        this['domain_id'] = domainId;
        this['project_id'] = projectId;
        this['name'] = name;
        this['path_id'] = pathId;
        this['creator'] = creator;
    }
    public withId(id: string): PipelineGroupVo {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): PipelineGroupVo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): PipelineGroupVo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): PipelineGroupVo {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): PipelineGroupVo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withPathId(pathId: string): PipelineGroupVo {
        this['path_id'] = pathId;
        return this;
    }
    public set pathId(pathId: string  | undefined) {
        this['path_id'] = pathId;
    }
    public get pathId(): string | undefined {
        return this['path_id'];
    }
    public withOrdinal(ordinal: number): PipelineGroupVo {
        this['ordinal'] = ordinal;
        return this;
    }
    public withCreator(creator: string): PipelineGroupVo {
        this['creator'] = creator;
        return this;
    }
    public withUpdater(updater: string): PipelineGroupVo {
        this['updater'] = updater;
        return this;
    }
    public withCreateTime(createTime: number): PipelineGroupVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): PipelineGroupVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withChildren(children: Array<PipelineGroupVo>): PipelineGroupVo {
        this['children'] = children;
        return this;
    }
}