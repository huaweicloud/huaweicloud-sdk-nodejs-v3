

export class PipelineGroupCreateDTO {
    public name?: string;
    private 'project_id'?: string;
    private 'parent_id'?: string;
    public constructor(name?: string, projectId?: string) { 
        this['name'] = name;
        this['project_id'] = projectId;
    }
    public withName(name: string): PipelineGroupCreateDTO {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): PipelineGroupCreateDTO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withParentId(parentId: string): PipelineGroupCreateDTO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
}