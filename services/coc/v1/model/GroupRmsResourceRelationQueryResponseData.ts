import { GroupRmsResourceRelationQueryResponseTags } from './GroupRmsResourceRelationQueryResponseTags';


export class GroupRmsResourceRelationQueryResponseData {
    public id?: string;
    private 'cmdb_resource_id'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'application_id'?: string;
    private 'resource_id'?: string;
    public name?: string;
    private 'ep_id'?: string;
    private 'project_id'?: string;
    private 'ep_name'?: string;
    public provider?: string;
    private 'domain_id'?: string;
    public type?: string;
    private 'region_id'?: string;
    private 'inner_ip'?: string;
    private 'agent_id'?: string;
    private 'agent_state'?: GroupRmsResourceRelationQueryResponseDataAgentStateEnum | string;
    public tags?: Array<GroupRmsResourceRelationQueryResponseTags>;
    private 'ingest_properties'?: object;
    public properties?: { [key: string]: string; };
    public operable?: string;
    private 'create_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): GroupRmsResourceRelationQueryResponseData {
        this['id'] = id;
        return this;
    }
    public withCmdbResourceId(cmdbResourceId: string): GroupRmsResourceRelationQueryResponseData {
        this['cmdb_resource_id'] = cmdbResourceId;
        return this;
    }
    public set cmdbResourceId(cmdbResourceId: string  | undefined) {
        this['cmdb_resource_id'] = cmdbResourceId;
    }
    public get cmdbResourceId(): string | undefined {
        return this['cmdb_resource_id'];
    }
    public withGroupId(groupId: string): GroupRmsResourceRelationQueryResponseData {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): GroupRmsResourceRelationQueryResponseData {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withApplicationId(applicationId: string): GroupRmsResourceRelationQueryResponseData {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withResourceId(resourceId: string): GroupRmsResourceRelationQueryResponseData {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withName(name: string): GroupRmsResourceRelationQueryResponseData {
        this['name'] = name;
        return this;
    }
    public withEpId(epId: string): GroupRmsResourceRelationQueryResponseData {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withProjectId(projectId: string): GroupRmsResourceRelationQueryResponseData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEpName(epName: string): GroupRmsResourceRelationQueryResponseData {
        this['ep_name'] = epName;
        return this;
    }
    public set epName(epName: string  | undefined) {
        this['ep_name'] = epName;
    }
    public get epName(): string | undefined {
        return this['ep_name'];
    }
    public withProvider(provider: string): GroupRmsResourceRelationQueryResponseData {
        this['provider'] = provider;
        return this;
    }
    public withDomainId(domainId: string): GroupRmsResourceRelationQueryResponseData {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withType(type: string): GroupRmsResourceRelationQueryResponseData {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: string): GroupRmsResourceRelationQueryResponseData {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withInnerIp(innerIp: string): GroupRmsResourceRelationQueryResponseData {
        this['inner_ip'] = innerIp;
        return this;
    }
    public set innerIp(innerIp: string  | undefined) {
        this['inner_ip'] = innerIp;
    }
    public get innerIp(): string | undefined {
        return this['inner_ip'];
    }
    public withAgentId(agentId: string): GroupRmsResourceRelationQueryResponseData {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentState(agentState: GroupRmsResourceRelationQueryResponseDataAgentStateEnum | string): GroupRmsResourceRelationQueryResponseData {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: GroupRmsResourceRelationQueryResponseDataAgentStateEnum | string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): GroupRmsResourceRelationQueryResponseDataAgentStateEnum | string | undefined {
        return this['agent_state'];
    }
    public withTags(tags: Array<GroupRmsResourceRelationQueryResponseTags>): GroupRmsResourceRelationQueryResponseData {
        this['tags'] = tags;
        return this;
    }
    public withIngestProperties(ingestProperties: object): GroupRmsResourceRelationQueryResponseData {
        this['ingest_properties'] = ingestProperties;
        return this;
    }
    public set ingestProperties(ingestProperties: object  | undefined) {
        this['ingest_properties'] = ingestProperties;
    }
    public get ingestProperties(): object | undefined {
        return this['ingest_properties'];
    }
    public withProperties(properties: { [key: string]: string; }): GroupRmsResourceRelationQueryResponseData {
        this['properties'] = properties;
        return this;
    }
    public withOperable(operable: string): GroupRmsResourceRelationQueryResponseData {
        this['operable'] = operable;
        return this;
    }
    public withCreateTime(createTime: Date): GroupRmsResourceRelationQueryResponseData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GroupRmsResourceRelationQueryResponseDataAgentStateEnum {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    INSTALLING = 'INSTALLING',
    FAILED = 'FAILED',
    UNINSTALLED = 'UNINSTALLED'
}
