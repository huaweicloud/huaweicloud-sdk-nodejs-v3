

export class ExportUsersV3Req {
    private 'user_name'?: string;
    public description?: string;
    private 'active_type'?: string;
    public language?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withUserName(userName: string): ExportUsersV3Req {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDescription(description: string): ExportUsersV3Req {
        this['description'] = description;
        return this;
    }
    public withActiveType(activeType: string): ExportUsersV3Req {
        this['active_type'] = activeType;
        return this;
    }
    public set activeType(activeType: string  | undefined) {
        this['active_type'] = activeType;
    }
    public get activeType(): string | undefined {
        return this['active_type'];
    }
    public withLanguage(language: string): ExportUsersV3Req {
        this['language'] = language;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportUsersV3Req {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}