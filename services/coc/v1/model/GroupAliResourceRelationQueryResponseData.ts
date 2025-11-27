

export class GroupAliResourceRelationQueryResponseData {
    public id?: string;
    private 'cmdb_resource_id'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'resource_id'?: string;
    public name?: string;
    public type?: string;
    private 'ingest_properties'?: object;
    private 'zone_id'?: string;
    private 'inner_ip'?: string;
    private 'agent_id'?: string;
    private 'agent_state'?: GroupAliResourceRelationQueryResponseDataAgentStateEnum | string;
    private 'region_id'?: string;
    private 'create_time'?: string;
    public datasource?: string;
    public constructor() { 
    }
    public withId(id: string): GroupAliResourceRelationQueryResponseData {
        this['id'] = id;
        return this;
    }
    public withCmdbResourceId(cmdbResourceId: string): GroupAliResourceRelationQueryResponseData {
        this['cmdb_resource_id'] = cmdbResourceId;
        return this;
    }
    public set cmdbResourceId(cmdbResourceId: string  | undefined) {
        this['cmdb_resource_id'] = cmdbResourceId;
    }
    public get cmdbResourceId(): string | undefined {
        return this['cmdb_resource_id'];
    }
    public withGroupId(groupId: string): GroupAliResourceRelationQueryResponseData {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): GroupAliResourceRelationQueryResponseData {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withResourceId(resourceId: string): GroupAliResourceRelationQueryResponseData {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withName(name: string): GroupAliResourceRelationQueryResponseData {
        this['name'] = name;
        return this;
    }
    public withType(type: string): GroupAliResourceRelationQueryResponseData {
        this['type'] = type;
        return this;
    }
    public withIngestProperties(ingestProperties: object): GroupAliResourceRelationQueryResponseData {
        this['ingest_properties'] = ingestProperties;
        return this;
    }
    public set ingestProperties(ingestProperties: object  | undefined) {
        this['ingest_properties'] = ingestProperties;
    }
    public get ingestProperties(): object | undefined {
        return this['ingest_properties'];
    }
    public withZoneId(zoneId: string): GroupAliResourceRelationQueryResponseData {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withInnerIp(innerIp: string): GroupAliResourceRelationQueryResponseData {
        this['inner_ip'] = innerIp;
        return this;
    }
    public set innerIp(innerIp: string  | undefined) {
        this['inner_ip'] = innerIp;
    }
    public get innerIp(): string | undefined {
        return this['inner_ip'];
    }
    public withAgentId(agentId: string): GroupAliResourceRelationQueryResponseData {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentState(agentState: GroupAliResourceRelationQueryResponseDataAgentStateEnum | string): GroupAliResourceRelationQueryResponseData {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: GroupAliResourceRelationQueryResponseDataAgentStateEnum | string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): GroupAliResourceRelationQueryResponseDataAgentStateEnum | string | undefined {
        return this['agent_state'];
    }
    public withRegionId(regionId: string): GroupAliResourceRelationQueryResponseData {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withCreateTime(createTime: string): GroupAliResourceRelationQueryResponseData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDatasource(datasource: string): GroupAliResourceRelationQueryResponseData {
        this['datasource'] = datasource;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GroupAliResourceRelationQueryResponseDataAgentStateEnum {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    INSTALLING = 'INSTALLING',
    FAILED = 'FAILED',
    UNINSTALLED = 'UNINSTALLED'
}
