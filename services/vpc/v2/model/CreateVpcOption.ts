

export class CreateVpcOption {
    public cidr?: string;
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<string>;
    private 'block_service_endpoint_states'?: string;
    private 'enable_network_address_usage_metrics'?: boolean;
    public constructor() { 
    }
    public withCidr(cidr: string): CreateVpcOption {
        this['cidr'] = cidr;
        return this;
    }
    public withName(name: string): CreateVpcOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateVpcOption {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateVpcOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<string>): CreateVpcOption {
        this['tags'] = tags;
        return this;
    }
    public withBlockServiceEndpointStates(blockServiceEndpointStates: string): CreateVpcOption {
        this['block_service_endpoint_states'] = blockServiceEndpointStates;
        return this;
    }
    public set blockServiceEndpointStates(blockServiceEndpointStates: string  | undefined) {
        this['block_service_endpoint_states'] = blockServiceEndpointStates;
    }
    public get blockServiceEndpointStates(): string | undefined {
        return this['block_service_endpoint_states'];
    }
    public withEnableNetworkAddressUsageMetrics(enableNetworkAddressUsageMetrics: boolean): CreateVpcOption {
        this['enable_network_address_usage_metrics'] = enableNetworkAddressUsageMetrics;
        return this;
    }
    public set enableNetworkAddressUsageMetrics(enableNetworkAddressUsageMetrics: boolean  | undefined) {
        this['enable_network_address_usage_metrics'] = enableNetworkAddressUsageMetrics;
    }
    public get enableNetworkAddressUsageMetrics(): boolean | undefined {
        return this['enable_network_address_usage_metrics'];
    }
}