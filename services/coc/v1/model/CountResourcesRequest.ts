

export class CountResourcesRequest {
    public provider?: string;
    public type?: string;
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
    private 'ep_id'?: string;
    private 'is_delegated'?: string;
    private 'is_collected'?: boolean;
    private 'flavor_name'?: string;
    private 'charging_mode'?: string;
    public constructor(provider?: string, type?: string) { 
        this['provider'] = provider;
        this['type'] = type;
    }
    public withProvider(provider: string): CountResourcesRequest {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): CountResourcesRequest {
        this['type'] = type;
        return this;
    }
    public withResourceIdList(resourceIdList: Array<string>): CountResourcesRequest {
        this['resource_id_list'] = resourceIdList;
        return this;
    }
    public set resourceIdList(resourceIdList: Array<string>  | undefined) {
        this['resource_id_list'] = resourceIdList;
    }
    public get resourceIdList(): Array<string> | undefined {
        return this['resource_id_list'];
    }
    public withName(name: string): CountResourcesRequest {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): CountResourcesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAzId(azId: string): CountResourcesRequest {
        this['az_id'] = azId;
        return this;
    }
    public set azId(azId: string  | undefined) {
        this['az_id'] = azId;
    }
    public get azId(): string | undefined {
        return this['az_id'];
    }
    public withIpType(ipType: string): CountResourcesRequest {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): string | undefined {
        return this['ip_type'];
    }
    public withIp(ip: string): CountResourcesRequest {
        this['ip'] = ip;
        return this;
    }
    public withStatus(status: string): CountResourcesRequest {
        this['status'] = status;
        return this;
    }
    public withAgentState(agentState: string): CountResourcesRequest {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): string | undefined {
        return this['agent_state'];
    }
    public withImageName(imageName: string): CountResourcesRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withOsType(osType: string): CountResourcesRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withTag(tag: string): CountResourcesRequest {
        this['tag'] = tag;
        return this;
    }
    public withTagKey(tagKey: string): CountResourcesRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withGroupId(groupId: string): CountResourcesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withComponentId(componentId: string): CountResourcesRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withApplicationId(applicationId: string): CountResourcesRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withCceClusterId(cceClusterId: string): CountResourcesRequest {
        this['cce_cluster_id'] = cceClusterId;
        return this;
    }
    public set cceClusterId(cceClusterId: string  | undefined) {
        this['cce_cluster_id'] = cceClusterId;
    }
    public get cceClusterId(): string | undefined {
        return this['cce_cluster_id'];
    }
    public withEpId(epId: string): CountResourcesRequest {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withIsDelegated(isDelegated: string): CountResourcesRequest {
        this['is_delegated'] = isDelegated;
        return this;
    }
    public set isDelegated(isDelegated: string  | undefined) {
        this['is_delegated'] = isDelegated;
    }
    public get isDelegated(): string | undefined {
        return this['is_delegated'];
    }
    public withIsCollected(isCollected: boolean): CountResourcesRequest {
        this['is_collected'] = isCollected;
        return this;
    }
    public set isCollected(isCollected: boolean  | undefined) {
        this['is_collected'] = isCollected;
    }
    public get isCollected(): boolean | undefined {
        return this['is_collected'];
    }
    public withFlavorName(flavorName: string): CountResourcesRequest {
        this['flavor_name'] = flavorName;
        return this;
    }
    public set flavorName(flavorName: string  | undefined) {
        this['flavor_name'] = flavorName;
    }
    public get flavorName(): string | undefined {
        return this['flavor_name'];
    }
    public withChargingMode(chargingMode: string): CountResourcesRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
}