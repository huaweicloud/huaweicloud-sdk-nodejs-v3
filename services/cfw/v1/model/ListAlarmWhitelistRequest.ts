

export class ListAlarmWhitelistRequest {
    private 'fw_instance_id'?: string;
    private 'ip_address'?: string;
    public limit?: number;
    public offset?: number;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(fwInstanceId?: string, limit?: number, offset?: number, projectId?: string) { 
        this['fw_instance_id'] = fwInstanceId;
        this['limit'] = limit;
        this['offset'] = offset;
        this['project_id'] = projectId;
    }
    public withFwInstanceId(fwInstanceId: string): ListAlarmWhitelistRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withIpAddress(ipAddress: string): ListAlarmWhitelistRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withLimit(limit: number): ListAlarmWhitelistRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAlarmWhitelistRequest {
        this['offset'] = offset;
        return this;
    }
    public withProjectId(projectId: string): ListAlarmWhitelistRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAlarmWhitelistRequest {
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