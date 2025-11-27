

export class ListClusterProtectPolicyTemplatesRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'template_name'?: string;
    private 'template_type'?: string;
    private 'target_kind'?: string;
    public tag?: string;
    public level?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListClusterProtectPolicyTemplatesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListClusterProtectPolicyTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListClusterProtectPolicyTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withTemplateName(templateName: string): ListClusterProtectPolicyTemplatesRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: string): ListClusterProtectPolicyTemplatesRequest {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withTargetKind(targetKind: string): ListClusterProtectPolicyTemplatesRequest {
        this['target_kind'] = targetKind;
        return this;
    }
    public set targetKind(targetKind: string  | undefined) {
        this['target_kind'] = targetKind;
    }
    public get targetKind(): string | undefined {
        return this['target_kind'];
    }
    public withTag(tag: string): ListClusterProtectPolicyTemplatesRequest {
        this['tag'] = tag;
        return this;
    }
    public withLevel(level: string): ListClusterProtectPolicyTemplatesRequest {
        this['level'] = level;
        return this;
    }
}