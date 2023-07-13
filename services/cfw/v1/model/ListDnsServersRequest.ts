

export class ListDnsServersRequest {
    private 'project_id': string | undefined;
    public limit?: number;
    public offset?: number;
    private 'fw_instance_id'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListDnsServersRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withLimit(limit: number): ListDnsServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDnsServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withFwInstanceId(fwInstanceId: string): ListDnsServersRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDnsServersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}