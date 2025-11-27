

export class CountGroupRmsResourceRelationsRequest {
    private 'application_id'?: string;
    private 'group_id'?: string;
    public provider?: string;
    public type?: string;
    public vendor?: string;
    private 'resource_id_list'?: Array<string>;
    public name?: string;
    private 'region_id'?: string;
    private 'az_id'?: string;
    private 'ip_type'?: string;
    public ip?: string;
    public status?: string;
    private 'agent_state'?: string;
    private 'image_name'?: string;
    private 'os_type'?: string;
    public tag?: string;
    public constructor(provider?: string, type?: string, vendor?: string) { 
        this['provider'] = provider;
        this['type'] = type;
        this['vendor'] = vendor;
    }
    public withApplicationId(applicationId: string): CountGroupRmsResourceRelationsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withGroupId(groupId: string): CountGroupRmsResourceRelationsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withProvider(provider: string): CountGroupRmsResourceRelationsRequest {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): CountGroupRmsResourceRelationsRequest {
        this['type'] = type;
        return this;
    }
    public withVendor(vendor: string): CountGroupRmsResourceRelationsRequest {
        this['vendor'] = vendor;
        return this;
    }
    public withResourceIdList(resourceIdList: Array<string>): CountGroupRmsResourceRelationsRequest {
        this['resource_id_list'] = resourceIdList;
        return this;
    }
    public set resourceIdList(resourceIdList: Array<string>  | undefined) {
        this['resource_id_list'] = resourceIdList;
    }
    public get resourceIdList(): Array<string> | undefined {
        return this['resource_id_list'];
    }
    public withName(name: string): CountGroupRmsResourceRelationsRequest {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): CountGroupRmsResourceRelationsRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAzId(azId: string): CountGroupRmsResourceRelationsRequest {
        this['az_id'] = azId;
        return this;
    }
    public set azId(azId: string  | undefined) {
        this['az_id'] = azId;
    }
    public get azId(): string | undefined {
        return this['az_id'];
    }
    public withIpType(ipType: string): CountGroupRmsResourceRelationsRequest {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): string | undefined {
        return this['ip_type'];
    }
    public withIp(ip: string): CountGroupRmsResourceRelationsRequest {
        this['ip'] = ip;
        return this;
    }
    public withStatus(status: string): CountGroupRmsResourceRelationsRequest {
        this['status'] = status;
        return this;
    }
    public withAgentState(agentState: string): CountGroupRmsResourceRelationsRequest {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): string | undefined {
        return this['agent_state'];
    }
    public withImageName(imageName: string): CountGroupRmsResourceRelationsRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withOsType(osType: string): CountGroupRmsResourceRelationsRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withTag(tag: string): CountGroupRmsResourceRelationsRequest {
        this['tag'] = tag;
        return this;
    }
}