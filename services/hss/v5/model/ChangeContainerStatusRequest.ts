

export class ChangeContainerStatusRequest {
    private 'enterprise_project_id'?: string;
    private 'container_id'?: string;
    private 'container_name'?: string;
    public opr?: string;
    public constructor(containerId?: string, containerName?: string, opr?: string) { 
        this['container_id'] = containerId;
        this['container_name'] = containerName;
        this['opr'] = opr;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeContainerStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContainerId(containerId: string): ChangeContainerStatusRequest {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): ChangeContainerStatusRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withOpr(opr: string): ChangeContainerStatusRequest {
        this['opr'] = opr;
        return this;
    }
}