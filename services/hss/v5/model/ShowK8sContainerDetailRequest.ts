

export class ShowK8sContainerDetailRequest {
    private 'enterprise_project_id'?: string;
    private 'container_id'?: string;
    public constructor(containerId?: string) { 
        this['container_id'] = containerId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowK8sContainerDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContainerId(containerId: string): ShowK8sContainerDetailRequest {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
}