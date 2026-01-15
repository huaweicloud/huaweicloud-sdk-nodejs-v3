

export class ExportUsersNewReq {
    private 'user_name'?: string;
    public description?: string;
    private 'active_type'?: string;
    public language?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withUserName(userName: string): ExportUsersNewReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDescription(description: string): ExportUsersNewReq {
        this['description'] = description;
        return this;
    }
    public withActiveType(activeType: string): ExportUsersNewReq {
        this['active_type'] = activeType;
        return this;
    }
    public set activeType(activeType: string  | undefined) {
        this['active_type'] = activeType;
    }
    public get activeType(): string | undefined {
        return this['active_type'];
    }
    public withLanguage(language: string): ExportUsersNewReq {
        this['language'] = language;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportUsersNewReq {
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