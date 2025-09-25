

export class ShowAgentStatisticsRequest {
    private 'enterprise_project_id'?: string;
    private 'container_type'?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowAgentStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContainerType(containerType: number): ShowAgentStatisticsRequest {
        this['container_type'] = containerType;
        return this;
    }
    public set containerType(containerType: number  | undefined) {
        this['container_type'] = containerType;
    }
    public get containerType(): number | undefined {
        return this['container_type'];
    }
}