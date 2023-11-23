

export class CreateFunctionAppRequestBody {
    public name?: string;
    private 'template_id'?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'agency_name'?: string;
    public params?: { [key: string]: string; };
    public constructor() { 
    }
    public withName(name: string): CreateFunctionAppRequestBody {
        this['name'] = name;
        return this;
    }
    public withTemplateId(templateId: string): CreateFunctionAppRequestBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withDescription(description: string): CreateFunctionAppRequestBody {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateFunctionAppRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAgencyName(agencyName: string): CreateFunctionAppRequestBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withParams(params: { [key: string]: string; }): CreateFunctionAppRequestBody {
        this['params'] = params;
        return this;
    }
}