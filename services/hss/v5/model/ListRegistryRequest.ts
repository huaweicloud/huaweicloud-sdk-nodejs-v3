

export class ListRegistryRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'registry_name'?: string;
    private 'registry_id'?: string;
    private 'registry_type'?: string;
    private 'registry_addr'?: string;
    public status?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRegistryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListRegistryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRegistryRequest {
        this['limit'] = limit;
        return this;
    }
    public withRegistryName(registryName: string): ListRegistryRequest {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withRegistryId(registryId: string): ListRegistryRequest {
        this['registry_id'] = registryId;
        return this;
    }
    public set registryId(registryId: string  | undefined) {
        this['registry_id'] = registryId;
    }
    public get registryId(): string | undefined {
        return this['registry_id'];
    }
    public withRegistryType(registryType: string): ListRegistryRequest {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withRegistryAddr(registryAddr: string): ListRegistryRequest {
        this['registry_addr'] = registryAddr;
        return this;
    }
    public set registryAddr(registryAddr: string  | undefined) {
        this['registry_addr'] = registryAddr;
    }
    public get registryAddr(): string | undefined {
        return this['registry_addr'];
    }
    public withStatus(status: string): ListRegistryRequest {
        this['status'] = status;
        return this;
    }
}