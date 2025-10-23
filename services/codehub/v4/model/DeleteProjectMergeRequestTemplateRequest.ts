

export class DeleteProjectMergeRequestTemplateRequest {
    private 'project_id'?: string;
    private 'template_id'?: number;
    public constructor(projectId?: string, templateId?: number) { 
        this['project_id'] = projectId;
        this['template_id'] = templateId;
    }
    public withProjectId(projectId: string): DeleteProjectMergeRequestTemplateRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTemplateId(templateId: number): DeleteProjectMergeRequestTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
}