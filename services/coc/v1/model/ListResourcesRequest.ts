

export class ListResourcesRequest {
    public provider?: string;
    public type?: string;
    public limit?: number;
    public marker?: string;
    private 'resource_id_list'?: Array<string>;
    private 'ip_list'?: Array<string>;
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
    private 'is_collected'?: boolean;
    private 'flavor_name'?: string;
    private 'charging_mode'?: string;
    public offset?: string;
    private 'enterprise_project_id'?: string;
    private 'order_field'?: string;
    public direction?: string;
    private 'show_associated_groups'?: string;
    public operable?: string;
    private 'create_since'?: string;
    private 'create_until'?: string;
    public constructor(provider?: string, type?: string, limit?: number) { 
        this['provider'] = provider;
        this['type'] = type;
        this['limit'] = limit;
    }
    public withProvider(provider: string): ListResourcesRequest {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ListResourcesRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourcesRequest {
        this['marker'] = marker;
        return this;
    }
    public withResourceIdList(resourceIdList: Array<string>): ListResourcesRequest {
        this['resource_id_list'] = resourceIdList;
        return this;
    }
    public set resourceIdList(resourceIdList: Array<string>  | undefined) {
        this['resource_id_list'] = resourceIdList;
    }
    public get resourceIdList(): Array<string> | undefined {
        return this['resource_id_list'];
    }
    public withIpList(ipList: Array<string>): ListResourcesRequest {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<string>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<string> | undefined {
        return this['ip_list'];
    }
    public withName(name: string): ListResourcesRequest {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): ListResourcesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAzId(azId: string): ListResourcesRequest {
        this['az_id'] = azId;
        return this;
    }
    public set azId(azId: string  | undefined) {
        this['az_id'] = azId;
    }
    public get azId(): string | undefined {
        return this['az_id'];
    }
    public withIpType(ipType: string): ListResourcesRequest {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): string | undefined {
        return this['ip_type'];
    }
    public withIp(ip: string): ListResourcesRequest {
        this['ip'] = ip;
        return this;
    }
    public withStatus(status: string): ListResourcesRequest {
        this['status'] = status;
        return this;
    }
    public withAgentState(agentState: string): ListResourcesRequest {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): string | undefined {
        return this['agent_state'];
    }
    public withImageName(imageName: string): ListResourcesRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withOsType(osType: string): ListResourcesRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withTag(tag: string): ListResourcesRequest {
        this['tag'] = tag;
        return this;
    }
    public withTagKey(tagKey: string): ListResourcesRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withGroupId(groupId: string): ListResourcesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withComponentId(componentId: string): ListResourcesRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withApplicationId(applicationId: string): ListResourcesRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withCceClusterId(cceClusterId: string): ListResourcesRequest {
        this['cce_cluster_id'] = cceClusterId;
        return this;
    }
    public set cceClusterId(cceClusterId: string  | undefined) {
        this['cce_cluster_id'] = cceClusterId;
    }
    public get cceClusterId(): string | undefined {
        return this['cce_cluster_id'];
    }
    public withVpcId(vpcId: string): ListResourcesRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withEpId(epId: string): ListResourcesRequest {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withIsDelegated(isDelegated: boolean): ListResourcesRequest {
        this['is_delegated'] = isDelegated;
        return this;
    }
    public set isDelegated(isDelegated: boolean  | undefined) {
        this['is_delegated'] = isDelegated;
    }
    public get isDelegated(): boolean | undefined {
        return this['is_delegated'];
    }
    public withIsCollected(isCollected: boolean): ListResourcesRequest {
        this['is_collected'] = isCollected;
        return this;
    }
    public set isCollected(isCollected: boolean  | undefined) {
        this['is_collected'] = isCollected;
    }
    public get isCollected(): boolean | undefined {
        return this['is_collected'];
    }
    public withFlavorName(flavorName: string): ListResourcesRequest {
        this['flavor_name'] = flavorName;
        return this;
    }
    public set flavorName(flavorName: string  | undefined) {
        this['flavor_name'] = flavorName;
    }
    public get flavorName(): string | undefined {
        return this['flavor_name'];
    }
    public withChargingMode(chargingMode: string): ListResourcesRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withOffset(offset: string): ListResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListResourcesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOrderField(orderField: string): ListResourcesRequest {
        this['order_field'] = orderField;
        return this;
    }
    public set orderField(orderField: string  | undefined) {
        this['order_field'] = orderField;
    }
    public get orderField(): string | undefined {
        return this['order_field'];
    }
    public withDirection(direction: string): ListResourcesRequest {
        this['direction'] = direction;
        return this;
    }
    public withShowAssociatedGroups(showAssociatedGroups: string): ListResourcesRequest {
        this['show_associated_groups'] = showAssociatedGroups;
        return this;
    }
    public set showAssociatedGroups(showAssociatedGroups: string  | undefined) {
        this['show_associated_groups'] = showAssociatedGroups;
    }
    public get showAssociatedGroups(): string | undefined {
        return this['show_associated_groups'];
    }
    public withOperable(operable: string): ListResourcesRequest {
        this['operable'] = operable;
        return this;
    }
    public withCreateSince(createSince: string): ListResourcesRequest {
        this['create_since'] = createSince;
        return this;
    }
    public set createSince(createSince: string  | undefined) {
        this['create_since'] = createSince;
    }
    public get createSince(): string | undefined {
        return this['create_since'];
    }
    public withCreateUntil(createUntil: string): ListResourcesRequest {
        this['create_until'] = createUntil;
        return this;
    }
    public set createUntil(createUntil: string  | undefined) {
        this['create_until'] = createUntil;
    }
    public get createUntil(): string | undefined {
        return this['create_until'];
    }
}