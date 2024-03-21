

export class ListHostVulsRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    public type?: string;
    private 'vul_name'?: string;
    public limit?: number;
    public offset?: number;
    private 'handle_status'?: string;
    public status?: string;
    private 'repair_priority'?: string;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHostVulsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ListHostVulsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withType(type: string): ListHostVulsRequest {
        this['type'] = type;
        return this;
    }
    public withVulName(vulName: string): ListHostVulsRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withLimit(limit: number): ListHostVulsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHostVulsRequest {
        this['offset'] = offset;
        return this;
    }
    public withHandleStatus(handleStatus: string): ListHostVulsRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withStatus(status: string): ListHostVulsRequest {
        this['status'] = status;
        return this;
    }
    public withRepairPriority(repairPriority: string): ListHostVulsRequest {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
}