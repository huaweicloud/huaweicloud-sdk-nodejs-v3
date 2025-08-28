

export class ListVulHostAppsRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    private 'vul_id'?: string;
    private 'handle_status'?: string;
    private 'container_id'?: string;
    private 'is_container'?: boolean;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulHostAppsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ListVulHostAppsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withVulId(vulId: string): ListVulHostAppsRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withHandleStatus(handleStatus: string): ListVulHostAppsRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withContainerId(containerId: string): ListVulHostAppsRequest {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withIsContainer(isContainer: boolean): ListVulHostAppsRequest {
        this['is_container'] = isContainer;
        return this;
    }
    public set isContainer(isContainer: boolean  | undefined) {
        this['is_container'] = isContainer;
    }
    public get isContainer(): boolean | undefined {
        return this['is_container'];
    }
}