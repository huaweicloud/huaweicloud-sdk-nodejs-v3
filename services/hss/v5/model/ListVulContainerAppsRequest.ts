

export class ListVulContainerAppsRequest {
    private 'enterprise_project_id'?: string;
    private 'container_id'?: string;
    private 'vul_id'?: string;
    private 'handle_status'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(containerId?: string, vulId?: string, handleStatus?: string) { 
        this['container_id'] = containerId;
        this['vul_id'] = vulId;
        this['handle_status'] = handleStatus;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulContainerAppsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContainerId(containerId: string): ListVulContainerAppsRequest {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withVulId(vulId: string): ListVulContainerAppsRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withHandleStatus(handleStatus: string): ListVulContainerAppsRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withLimit(limit: number): ListVulContainerAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulContainerAppsRequest {
        this['offset'] = offset;
        return this;
    }
}