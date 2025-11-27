import { TagResponse } from './TagResponse';


export class BatchListResourceResponseData {
    public id?: string;
    private 'resource_id'?: string;
    private 'domain_id'?: string;
    public name?: string;
    public provider?: string;
    public type?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'region_id'?: string;
    private 'ep_id'?: string;
    private 'ep_name'?: string;
    public tags?: Array<TagResponse>;
    private 'agent_id'?: string;
    private 'agent_state'?: BatchListResourceResponseDataAgentStateEnum | string;
    public properties?: object;
    private 'ingest_properties'?: { [key: string]: string; };
    private 'is_delegated'?: boolean;
    private 'inner_ip'?: string;
    public operable?: string;
    private 'is_associate_group'?: boolean;
    private 'associated_group_list'?: Array<string>;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): BatchListResourceResponseData {
        this['id'] = id;
        return this;
    }
    public withResourceId(resourceId: string): BatchListResourceResponseData {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withDomainId(domainId: string): BatchListResourceResponseData {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): BatchListResourceResponseData {
        this['name'] = name;
        return this;
    }
    public withProvider(provider: string): BatchListResourceResponseData {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): BatchListResourceResponseData {
        this['type'] = type;
        return this;
    }
    public withProjectId(projectId: string): BatchListResourceResponseData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): BatchListResourceResponseData {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withRegionId(regionId: string): BatchListResourceResponseData {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withEpId(epId: string): BatchListResourceResponseData {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withEpName(epName: string): BatchListResourceResponseData {
        this['ep_name'] = epName;
        return this;
    }
    public set epName(epName: string  | undefined) {
        this['ep_name'] = epName;
    }
    public get epName(): string | undefined {
        return this['ep_name'];
    }
    public withTags(tags: Array<TagResponse>): BatchListResourceResponseData {
        this['tags'] = tags;
        return this;
    }
    public withAgentId(agentId: string): BatchListResourceResponseData {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentState(agentState: BatchListResourceResponseDataAgentStateEnum | string): BatchListResourceResponseData {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: BatchListResourceResponseDataAgentStateEnum | string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): BatchListResourceResponseDataAgentStateEnum | string | undefined {
        return this['agent_state'];
    }
    public withProperties(properties: object): BatchListResourceResponseData {
        this['properties'] = properties;
        return this;
    }
    public withIngestProperties(ingestProperties: { [key: string]: string; }): BatchListResourceResponseData {
        this['ingest_properties'] = ingestProperties;
        return this;
    }
    public set ingestProperties(ingestProperties: { [key: string]: string; }  | undefined) {
        this['ingest_properties'] = ingestProperties;
    }
    public get ingestProperties(): { [key: string]: string; } | undefined {
        return this['ingest_properties'];
    }
    public withIsDelegated(isDelegated: boolean): BatchListResourceResponseData {
        this['is_delegated'] = isDelegated;
        return this;
    }
    public set isDelegated(isDelegated: boolean  | undefined) {
        this['is_delegated'] = isDelegated;
    }
    public get isDelegated(): boolean | undefined {
        return this['is_delegated'];
    }
    public withInnerIp(innerIp: string): BatchListResourceResponseData {
        this['inner_ip'] = innerIp;
        return this;
    }
    public set innerIp(innerIp: string  | undefined) {
        this['inner_ip'] = innerIp;
    }
    public get innerIp(): string | undefined {
        return this['inner_ip'];
    }
    public withOperable(operable: string): BatchListResourceResponseData {
        this['operable'] = operable;
        return this;
    }
    public withIsAssociateGroup(isAssociateGroup: boolean): BatchListResourceResponseData {
        this['is_associate_group'] = isAssociateGroup;
        return this;
    }
    public set isAssociateGroup(isAssociateGroup: boolean  | undefined) {
        this['is_associate_group'] = isAssociateGroup;
    }
    public get isAssociateGroup(): boolean | undefined {
        return this['is_associate_group'];
    }
    public withAssociatedGroupList(associatedGroupList: Array<string>): BatchListResourceResponseData {
        this['associated_group_list'] = associatedGroupList;
        return this;
    }
    public set associatedGroupList(associatedGroupList: Array<string>  | undefined) {
        this['associated_group_list'] = associatedGroupList;
    }
    public get associatedGroupList(): Array<string> | undefined {
        return this['associated_group_list'];
    }
    public withCreateTime(createTime: Date): BatchListResourceResponseData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): BatchListResourceResponseData {
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
export enum BatchListResourceResponseDataAgentStateEnum {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    INSTALLING = 'INSTALLING',
    FAILED = 'FAILED',
    UNINSTALLED = 'UNINSTALLED'
}
