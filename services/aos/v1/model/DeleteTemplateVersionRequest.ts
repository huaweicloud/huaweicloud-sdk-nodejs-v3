

export class DeleteTemplateVersionRequest {
    private 'Client-Request-Id': string | undefined;
    private 'project_id': string | undefined;
    private 'template_name': string | undefined;
    private 'version_id': string | undefined;
    private 'template_id'?: string | undefined;
    public constructor(clientRequestId?: any, projectId?: any, templateName?: any, versionId?: any) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
        this['template_name'] = templateName;
        this['version_id'] = versionId;
    }
    public withClientRequestId(clientRequestId: string): DeleteTemplateVersionRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId() {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): DeleteTemplateVersionRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTemplateName(templateName: string): DeleteTemplateVersionRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withVersionId(versionId: string): DeleteTemplateVersionRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId() {
        return this['version_id'];
    }
    public withTemplateId(templateId: string): DeleteTemplateVersionRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
}