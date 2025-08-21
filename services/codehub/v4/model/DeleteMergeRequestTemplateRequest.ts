

export class DeleteMergeRequestTemplateRequest {
    private 'repository_id'?: number;
    private 'template_id'?: number;
    public constructor(repositoryId?: number, templateId?: number) { 
        this['repository_id'] = repositoryId;
        this['template_id'] = templateId;
    }
    public withRepositoryId(repositoryId: number): DeleteMergeRequestTemplateRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withTemplateId(templateId: number): DeleteMergeRequestTemplateRequest {
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