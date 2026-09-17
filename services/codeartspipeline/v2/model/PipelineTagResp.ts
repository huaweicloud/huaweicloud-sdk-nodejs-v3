

export class PipelineTagResp {
    private 'tag_id'?: string;
    public name?: string;
    public color?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public constructor() { 
    }
    public withTagId(tagId: string): PipelineTagResp {
        this['tag_id'] = tagId;
        return this;
    }
    public set tagId(tagId: string  | undefined) {
        this['tag_id'] = tagId;
    }
    public get tagId(): string | undefined {
        return this['tag_id'];
    }
    public withName(name: string): PipelineTagResp {
        this['name'] = name;
        return this;
    }
    public withColor(color: string): PipelineTagResp {
        this['color'] = color;
        return this;
    }
    public withProjectId(projectId: string): PipelineTagResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): PipelineTagResp {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
}