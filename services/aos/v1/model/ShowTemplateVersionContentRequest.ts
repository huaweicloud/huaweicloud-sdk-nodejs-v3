

export class ShowTemplateVersionContentRequest {
    private 'Client-Request-Id'?: string;
    private 'project_id'?: string;
    private 'template_name'?: string;
    private 'version_id'?: string;
    private 'template_id'?: string;
    private 'access_control_source_vpc_ids'?: Array<string>;
    private 'access_control_source_ips'?: Array<string>;
    public constructor(clientRequestId?: string, projectId?: string, templateName?: string, versionId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
        this['template_name'] = templateName;
        this['version_id'] = versionId;
    }
    public withClientRequestId(clientRequestId: string): ShowTemplateVersionContentRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): ShowTemplateVersionContentRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTemplateName(templateName: string): ShowTemplateVersionContentRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withVersionId(versionId: string): ShowTemplateVersionContentRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withTemplateId(templateId: string): ShowTemplateVersionContentRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withAccessControlSourceVpcIds(accessControlSourceVpcIds: Array<string>): ShowTemplateVersionContentRequest {
        this['access_control_source_vpc_ids'] = accessControlSourceVpcIds;
        return this;
    }
    public set accessControlSourceVpcIds(accessControlSourceVpcIds: Array<string>  | undefined) {
        this['access_control_source_vpc_ids'] = accessControlSourceVpcIds;
    }
    public get accessControlSourceVpcIds(): Array<string> | undefined {
        return this['access_control_source_vpc_ids'];
    }
    public withAccessControlSourceIps(accessControlSourceIps: Array<string>): ShowTemplateVersionContentRequest {
        this['access_control_source_ips'] = accessControlSourceIps;
        return this;
    }
    public set accessControlSourceIps(accessControlSourceIps: Array<string>  | undefined) {
        this['access_control_source_ips'] = accessControlSourceIps;
    }
    public get accessControlSourceIps(): Array<string> | undefined {
        return this['access_control_source_ips'];
    }
}