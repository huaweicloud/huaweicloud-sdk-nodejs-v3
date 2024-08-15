

export class ListResourceRequest {
    public provider?: string;
    public type?: string;
    public limit?: number;
    public marker?: string;
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
    private 'tag_key'?: string;
    private 'group_id'?: string;
    private 'component_id'?: string;
    private 'application_id'?: string;
    private 'cce_cluster_id'?: string;
    private 'vpc_id'?: string;
    private 'ep_id'?: string;
    private 'is_delegated'?: boolean;
    public constructor(provider?: string, type?: string, limit?: number) { 
        this['provider'] = provider;
        this['type'] = type;
        this['limit'] = limit;
    }
    public withProvider(provider: string): ListResourceRequest {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ListResourceRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListResourceRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourceRequest {
        this['marker'] = marker;
        return this;
    }
    public withResourceIdList(resourceIdList: Array<string>): ListResourceRequest {
        this['resource_id_list'] = resourceIdList;
        return this;
    }
    public set resourceIdList(resourceIdList: Array<string>  | undefined) {
        this['resource_id_list'] = resourceIdList;
    }
    public get resourceIdList(): Array<string> | undefined {
        return this['resource_id_list'];
    }
    public withName(name: string): ListResourceRequest {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): ListResourceRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAzId(azId: string): ListResourceRequest {
        this['az_id'] = azId;
        return this;
    }
    public set azId(azId: string  | undefined) {
        this['az_id'] = azId;
    }
    public get azId(): string | undefined {
        return this['az_id'];
    }
    public withIpType(ipType: string): ListResourceRequest {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): string | undefined {
        return this['ip_type'];
    }
    public withIp(ip: string): ListResourceRequest {
        this['ip'] = ip;
        return this;
    }
    public withStatus(status: string): ListResourceRequest {
        this['status'] = status;
        return this;
    }
    public withAgentState(agentState: string): ListResourceRequest {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): string | undefined {
        return this['agent_state'];
    }
    public withImageName(imageName: string): ListResourceRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withOsType(osType: string): ListResourceRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withTag(tag: string): ListResourceRequest {
        this['tag'] = tag;
        return this;
    }
    public withTagKey(tagKey: string): ListResourceRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withGroupId(groupId: string): ListResourceRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withComponentId(componentId: string): ListResourceRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withApplicationId(applicationId: string): ListResourceRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withCceClusterId(cceClusterId: string): ListResourceRequest {
        this['cce_cluster_id'] = cceClusterId;
        return this;
    }
    public set cceClusterId(cceClusterId: string  | undefined) {
        this['cce_cluster_id'] = cceClusterId;
    }
    public get cceClusterId(): string | undefined {
        return this['cce_cluster_id'];
    }
    public withVpcId(vpcId: string): ListResourceRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withEpId(epId: string): ListResourceRequest {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withIsDelegated(isDelegated: boolean): ListResourceRequest {
        this['is_delegated'] = isDelegated;
        return this;
    }
    public set isDelegated(isDelegated: boolean  | undefined) {
        this['is_delegated'] = isDelegated;
    }
    public get isDelegated(): boolean | undefined {
        return this['is_delegated'];
    }
}