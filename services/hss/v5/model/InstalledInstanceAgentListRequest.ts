

export class InstalledInstanceAgentListRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public type?: string;
    private 'workload_id'?: string;
    public constructor(limit?: number, offset?: number, type?: string) { 
        this['limit'] = limit;
        this['offset'] = offset;
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstalledInstanceAgentListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): InstalledInstanceAgentListRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): InstalledInstanceAgentListRequest {
        this['offset'] = offset;
        return this;
    }
    public withType(type: string): InstalledInstanceAgentListRequest {
        this['type'] = type;
        return this;
    }
    public withWorkloadId(workloadId: string): InstalledInstanceAgentListRequest {
        this['workload_id'] = workloadId;
        return this;
    }
    public set workloadId(workloadId: string  | undefined) {
        this['workload_id'] = workloadId;
    }
    public get workloadId(): string | undefined {
        return this['workload_id'];
    }
}