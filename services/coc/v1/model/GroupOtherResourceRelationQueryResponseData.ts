

export class GroupOtherResourceRelationQueryResponseData {
    public id?: string;
    private 'domain_id'?: string;
    private 'cmdb_resource_id'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'resource_id'?: string;
    public name?: string;
    public type?: GroupOtherResourceRelationQueryResponseDataTypeEnum | string;
    private 'is_delegated'?: boolean;
    private 'region_id'?: string;
    private 'inner_ip'?: string;
    private 'zone_id'?: string;
    private 'is_host'?: boolean;
    private 'agent_id'?: string;
    private 'agent_state'?: GroupOtherResourceRelationQueryResponseDataAgentStateEnum | string;
    public datasource?: string;
    public description?: string;
    public properties?: { [key: string]: object; };
    private 'ingest_properties'?: { [key: string]: object; };
    public xrn?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): GroupOtherResourceRelationQueryResponseData {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): GroupOtherResourceRelationQueryResponseData {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCmdbResourceId(cmdbResourceId: string): GroupOtherResourceRelationQueryResponseData {
        this['cmdb_resource_id'] = cmdbResourceId;
        return this;
    }
    public set cmdbResourceId(cmdbResourceId: string  | undefined) {
        this['cmdb_resource_id'] = cmdbResourceId;
    }
    public get cmdbResourceId(): string | undefined {
        return this['cmdb_resource_id'];
    }
    public withGroupId(groupId: string): GroupOtherResourceRelationQueryResponseData {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): GroupOtherResourceRelationQueryResponseData {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withResourceId(resourceId: string): GroupOtherResourceRelationQueryResponseData {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withName(name: string): GroupOtherResourceRelationQueryResponseData {
        this['name'] = name;
        return this;
    }
    public withType(type: GroupOtherResourceRelationQueryResponseDataTypeEnum | string): GroupOtherResourceRelationQueryResponseData {
        this['type'] = type;
        return this;
    }
    public withIsDelegated(isDelegated: boolean): GroupOtherResourceRelationQueryResponseData {
        this['is_delegated'] = isDelegated;
        return this;
    }
    public set isDelegated(isDelegated: boolean  | undefined) {
        this['is_delegated'] = isDelegated;
    }
    public get isDelegated(): boolean | undefined {
        return this['is_delegated'];
    }
    public withRegionId(regionId: string): GroupOtherResourceRelationQueryResponseData {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withInnerIp(innerIp: string): GroupOtherResourceRelationQueryResponseData {
        this['inner_ip'] = innerIp;
        return this;
    }
    public set innerIp(innerIp: string  | undefined) {
        this['inner_ip'] = innerIp;
    }
    public get innerIp(): string | undefined {
        return this['inner_ip'];
    }
    public withZoneId(zoneId: string): GroupOtherResourceRelationQueryResponseData {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withIsHost(isHost: boolean): GroupOtherResourceRelationQueryResponseData {
        this['is_host'] = isHost;
        return this;
    }
    public set isHost(isHost: boolean  | undefined) {
        this['is_host'] = isHost;
    }
    public get isHost(): boolean | undefined {
        return this['is_host'];
    }
    public withAgentId(agentId: string): GroupOtherResourceRelationQueryResponseData {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentState(agentState: GroupOtherResourceRelationQueryResponseDataAgentStateEnum | string): GroupOtherResourceRelationQueryResponseData {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: GroupOtherResourceRelationQueryResponseDataAgentStateEnum | string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): GroupOtherResourceRelationQueryResponseDataAgentStateEnum | string | undefined {
        return this['agent_state'];
    }
    public withDatasource(datasource: string): GroupOtherResourceRelationQueryResponseData {
        this['datasource'] = datasource;
        return this;
    }
    public withDescription(description: string): GroupOtherResourceRelationQueryResponseData {
        this['description'] = description;
        return this;
    }
    public withProperties(properties: { [key: string]: object; }): GroupOtherResourceRelationQueryResponseData {
        this['properties'] = properties;
        return this;
    }
    public withIngestProperties(ingestProperties: { [key: string]: object; }): GroupOtherResourceRelationQueryResponseData {
        this['ingest_properties'] = ingestProperties;
        return this;
    }
    public set ingestProperties(ingestProperties: { [key: string]: object; }  | undefined) {
        this['ingest_properties'] = ingestProperties;
    }
    public get ingestProperties(): { [key: string]: object; } | undefined {
        return this['ingest_properties'];
    }
    public withXrn(xrn: string): GroupOtherResourceRelationQueryResponseData {
        this['xrn'] = xrn;
        return this;
    }
    public withCreateTime(createTime: Date): GroupOtherResourceRelationQueryResponseData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): GroupOtherResourceRelationQueryResponseData {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GroupOtherResourceRelationQueryResponseDataTypeEnum {
    PM = 'PM',
    VM = 'VM'
}
/**
    * @export
    * @enum {string}
    */
export enum GroupOtherResourceRelationQueryResponseDataAgentStateEnum {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    INSTALLING = 'INSTALLING',
    FAILED = 'FAILED',
    UNINSTALLED = 'UNINSTALLED'
}
