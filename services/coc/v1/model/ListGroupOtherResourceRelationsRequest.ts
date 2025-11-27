

export class ListGroupOtherResourceRelationsRequest {
    private 'application_id'?: string;
    private 'component_id'?: string;
    private 'group_id'?: string;
    public vendor?: string;
    public type?: string;
    public limit?: number;
    public offset?: string;
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
    private 'charging_mode'?: string;
    private 'flavor_name'?: string;
    private 'ip_list'?: Array<string>;
    private 'is_collected'?: boolean;
    public constructor(vendor?: string, type?: string, limit?: number) { 
        this['vendor'] = vendor;
        this['type'] = type;
        this['limit'] = limit;
    }
    public withApplicationId(applicationId: string): ListGroupOtherResourceRelationsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withComponentId(componentId: string): ListGroupOtherResourceRelationsRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withGroupId(groupId: string): ListGroupOtherResourceRelationsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withVendor(vendor: string): ListGroupOtherResourceRelationsRequest {
        this['vendor'] = vendor;
        return this;
    }
    public withType(type: string): ListGroupOtherResourceRelationsRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListGroupOtherResourceRelationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListGroupOtherResourceRelationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withResourceIdList(resourceIdList: Array<string>): ListGroupOtherResourceRelationsRequest {
        this['resource_id_list'] = resourceIdList;
        return this;
    }
    public set resourceIdList(resourceIdList: Array<string>  | undefined) {
        this['resource_id_list'] = resourceIdList;
    }
    public get resourceIdList(): Array<string> | undefined {
        return this['resource_id_list'];
    }
    public withName(name: string): ListGroupOtherResourceRelationsRequest {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): ListGroupOtherResourceRelationsRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAzId(azId: string): ListGroupOtherResourceRelationsRequest {
        this['az_id'] = azId;
        return this;
    }
    public set azId(azId: string  | undefined) {
        this['az_id'] = azId;
    }
    public get azId(): string | undefined {
        return this['az_id'];
    }
    public withIpType(ipType: string): ListGroupOtherResourceRelationsRequest {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): string | undefined {
        return this['ip_type'];
    }
    public withIp(ip: string): ListGroupOtherResourceRelationsRequest {
        this['ip'] = ip;
        return this;
    }
    public withStatus(status: string): ListGroupOtherResourceRelationsRequest {
        this['status'] = status;
        return this;
    }
    public withAgentState(agentState: string): ListGroupOtherResourceRelationsRequest {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): string | undefined {
        return this['agent_state'];
    }
    public withImageName(imageName: string): ListGroupOtherResourceRelationsRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withOsType(osType: string): ListGroupOtherResourceRelationsRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withTag(tag: string): ListGroupOtherResourceRelationsRequest {
        this['tag'] = tag;
        return this;
    }
    public withChargingMode(chargingMode: string): ListGroupOtherResourceRelationsRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withFlavorName(flavorName: string): ListGroupOtherResourceRelationsRequest {
        this['flavor_name'] = flavorName;
        return this;
    }
    public set flavorName(flavorName: string  | undefined) {
        this['flavor_name'] = flavorName;
    }
    public get flavorName(): string | undefined {
        return this['flavor_name'];
    }
    public withIpList(ipList: Array<string>): ListGroupOtherResourceRelationsRequest {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<string>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<string> | undefined {
        return this['ip_list'];
    }
    public withIsCollected(isCollected: boolean): ListGroupOtherResourceRelationsRequest {
        this['is_collected'] = isCollected;
        return this;
    }
    public set isCollected(isCollected: boolean  | undefined) {
        this['is_collected'] = isCollected;
    }
    public get isCollected(): boolean | undefined {
        return this['is_collected'];
    }
}