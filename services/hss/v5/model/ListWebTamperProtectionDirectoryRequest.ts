

export class ListWebTamperProtectionDirectoryRequest {
    private 'enterprise_project_id'?: string;
    public type?: string;
    private 'protection_config_id'?: string;
    private 'container_id'?: string;
    public offset?: number;
    public limit?: number;
    public status?: string;
    private 'protect_directory'?: string;
    public constructor(type?: string, protectionConfigId?: string) { 
        this['type'] = type;
        this['protection_config_id'] = protectionConfigId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebTamperProtectionDirectoryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): ListWebTamperProtectionDirectoryRequest {
        this['type'] = type;
        return this;
    }
    public withProtectionConfigId(protectionConfigId: string): ListWebTamperProtectionDirectoryRequest {
        this['protection_config_id'] = protectionConfigId;
        return this;
    }
    public set protectionConfigId(protectionConfigId: string  | undefined) {
        this['protection_config_id'] = protectionConfigId;
    }
    public get protectionConfigId(): string | undefined {
        return this['protection_config_id'];
    }
    public withContainerId(containerId: string): ListWebTamperProtectionDirectoryRequest {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withOffset(offset: number): ListWebTamperProtectionDirectoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWebTamperProtectionDirectoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: string): ListWebTamperProtectionDirectoryRequest {
        this['status'] = status;
        return this;
    }
    public withProtectDirectory(protectDirectory: string): ListWebTamperProtectionDirectoryRequest {
        this['protect_directory'] = protectDirectory;
        return this;
    }
    public set protectDirectory(protectDirectory: string  | undefined) {
        this['protect_directory'] = protectDirectory;
    }
    public get protectDirectory(): string | undefined {
        return this['protect_directory'];
    }
}