

export class ListProjectMergeRequestTemplatesRequest {
    private 'project_id'?: string;
    private 'template_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProjectMergeRequestTemplatesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTemplateName(templateName: string): ListProjectMergeRequestTemplatesRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withOffset(offset: number): ListProjectMergeRequestTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectMergeRequestTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}