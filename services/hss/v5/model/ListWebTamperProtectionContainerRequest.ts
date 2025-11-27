

export class ListWebTamperProtectionContainerRequest {
    private 'enterprise_project_id'?: string;
    private 'protection_config_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'host_private_ip'?: string;
    private 'container_name'?: string;
    private 'container_id'?: string;
    public status?: string;
    public constructor(protectionConfigId?: string) { 
        this['protection_config_id'] = protectionConfigId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebTamperProtectionContainerRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProtectionConfigId(protectionConfigId: string): ListWebTamperProtectionContainerRequest {
        this['protection_config_id'] = protectionConfigId;
        return this;
    }
    public set protectionConfigId(protectionConfigId: string  | undefined) {
        this['protection_config_id'] = protectionConfigId;
    }
    public get protectionConfigId(): string | undefined {
        return this['protection_config_id'];
    }
    public withOffset(offset: number): ListWebTamperProtectionContainerRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWebTamperProtectionContainerRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostName(hostName: string): ListWebTamperProtectionContainerRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListWebTamperProtectionContainerRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostPrivateIp(hostPrivateIp: string): ListWebTamperProtectionContainerRequest {
        this['host_private_ip'] = hostPrivateIp;
        return this;
    }
    public set hostPrivateIp(hostPrivateIp: string  | undefined) {
        this['host_private_ip'] = hostPrivateIp;
    }
    public get hostPrivateIp(): string | undefined {
        return this['host_private_ip'];
    }
    public withContainerName(containerName: string): ListWebTamperProtectionContainerRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerId(containerId: string): ListWebTamperProtectionContainerRequest {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withStatus(status: string): ListWebTamperProtectionContainerRequest {
        this['status'] = status;
        return this;
    }
}