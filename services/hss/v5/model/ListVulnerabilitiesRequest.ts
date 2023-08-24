

export class ListVulnerabilitiesRequest {
    private 'enterprise_project_id'?: string;
    public type?: string;
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    public limit?: number;
    public offset?: number;
    private 'repair_priority'?: string;
    private 'handle_status'?: string;
    private 'cve_id'?: string;
    private 'label_list'?: string;
    public status?: string;
    private 'asset_value'?: string;
    private 'group_name'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulnerabilitiesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): ListVulnerabilitiesRequest {
        this['type'] = type;
        return this;
    }
    public withVulId(vulId: string): ListVulnerabilitiesRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): ListVulnerabilitiesRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withLimit(limit: number): ListVulnerabilitiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulnerabilitiesRequest {
        this['offset'] = offset;
        return this;
    }
    public withRepairPriority(repairPriority: string): ListVulnerabilitiesRequest {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
    public withHandleStatus(handleStatus: string): ListVulnerabilitiesRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withCveId(cveId: string): ListVulnerabilitiesRequest {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withLabelList(labelList: string): ListVulnerabilitiesRequest {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: string  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): string | undefined {
        return this['label_list'];
    }
    public withStatus(status: string): ListVulnerabilitiesRequest {
        this['status'] = status;
        return this;
    }
    public withAssetValue(assetValue: string): ListVulnerabilitiesRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withGroupName(groupName: string): ListVulnerabilitiesRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
}