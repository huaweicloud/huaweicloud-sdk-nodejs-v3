

export class ShowBaselineDirectoryRequest {
    private 'enterprise_project_id'?: string;
    private 'support_os'?: string;
    private 'select_type'?: string;
    private 'group_id'?: string;
    public constructor(supportOs?: string, selectType?: string) { 
        this['support_os'] = supportOs;
        this['select_type'] = selectType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowBaselineDirectoryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSupportOs(supportOs: string): ShowBaselineDirectoryRequest {
        this['support_os'] = supportOs;
        return this;
    }
    public set supportOs(supportOs: string  | undefined) {
        this['support_os'] = supportOs;
    }
    public get supportOs(): string | undefined {
        return this['support_os'];
    }
    public withSelectType(selectType: string): ShowBaselineDirectoryRequest {
        this['select_type'] = selectType;
        return this;
    }
    public set selectType(selectType: string  | undefined) {
        this['select_type'] = selectType;
    }
    public get selectType(): string | undefined {
        return this['select_type'];
    }
    public withGroupId(groupId: string): ShowBaselineDirectoryRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}