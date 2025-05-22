

export class CreateProjectV4RequestBody {
    private 'project_name'?: string;
    public description?: string;
    public source?: string;
    private 'project_type'?: string;
    private 'enterprise_id'?: string;
    private 'template_id'?: number;
    public constructor(projectName?: string, projectType?: string) { 
        this['project_name'] = projectName;
        this['project_type'] = projectType;
    }
    public withProjectName(projectName: string): CreateProjectV4RequestBody {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withDescription(description: string): CreateProjectV4RequestBody {
        this['description'] = description;
        return this;
    }
    public withSource(source: string): CreateProjectV4RequestBody {
        this['source'] = source;
        return this;
    }
    public withProjectType(projectType: string): CreateProjectV4RequestBody {
        this['project_type'] = projectType;
        return this;
    }
    public set projectType(projectType: string  | undefined) {
        this['project_type'] = projectType;
    }
    public get projectType(): string | undefined {
        return this['project_type'];
    }
    public withEnterpriseId(enterpriseId: string): CreateProjectV4RequestBody {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withTemplateId(templateId: number): CreateProjectV4RequestBody {
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