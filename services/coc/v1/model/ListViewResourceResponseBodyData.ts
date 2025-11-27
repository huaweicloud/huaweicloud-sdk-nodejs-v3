import { ListViewResourceResponseBodyTags } from './ListViewResourceResponseBodyTags';


export class ListViewResourceResponseBodyData {
    public id?: string;
    private 'view_id'?: string;
    private 'rms_resource_id'?: string;
    private 'resource_id'?: string;
    private 'domain_id'?: string;
    public name?: string;
    private 'ep_id'?: string;
    private 'ep_name'?: string;
    private 'project_id'?: string;
    public provider?: string;
    public type?: string;
    private 'region_id'?: string;
    public tags?: Array<ListViewResourceResponseBodyTags>;
    public properties?: object;
    private 'ingest_properties'?: object;
    private 'agent_id'?: string;
    private 'agent_state'?: string;
    private 'inner_ip'?: string;
    private 'associated_group_list'?: object;
    public constructor() { 
    }
    public withId(id: string): ListViewResourceResponseBodyData {
        this['id'] = id;
        return this;
    }
    public withViewId(viewId: string): ListViewResourceResponseBodyData {
        this['view_id'] = viewId;
        return this;
    }
    public set viewId(viewId: string  | undefined) {
        this['view_id'] = viewId;
    }
    public get viewId(): string | undefined {
        return this['view_id'];
    }
    public withRmsResourceId(rmsResourceId: string): ListViewResourceResponseBodyData {
        this['rms_resource_id'] = rmsResourceId;
        return this;
    }
    public set rmsResourceId(rmsResourceId: string  | undefined) {
        this['rms_resource_id'] = rmsResourceId;
    }
    public get rmsResourceId(): string | undefined {
        return this['rms_resource_id'];
    }
    public withResourceId(resourceId: string): ListViewResourceResponseBodyData {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withDomainId(domainId: string): ListViewResourceResponseBodyData {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): ListViewResourceResponseBodyData {
        this['name'] = name;
        return this;
    }
    public withEpId(epId: string): ListViewResourceResponseBodyData {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withEpName(epName: string): ListViewResourceResponseBodyData {
        this['ep_name'] = epName;
        return this;
    }
    public set epName(epName: string  | undefined) {
        this['ep_name'] = epName;
    }
    public get epName(): string | undefined {
        return this['ep_name'];
    }
    public withProjectId(projectId: string): ListViewResourceResponseBodyData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProvider(provider: string): ListViewResourceResponseBodyData {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ListViewResourceResponseBodyData {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: string): ListViewResourceResponseBodyData {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withTags(tags: Array<ListViewResourceResponseBodyTags>): ListViewResourceResponseBodyData {
        this['tags'] = tags;
        return this;
    }
    public withProperties(properties: object): ListViewResourceResponseBodyData {
        this['properties'] = properties;
        return this;
    }
    public withIngestProperties(ingestProperties: object): ListViewResourceResponseBodyData {
        this['ingest_properties'] = ingestProperties;
        return this;
    }
    public set ingestProperties(ingestProperties: object  | undefined) {
        this['ingest_properties'] = ingestProperties;
    }
    public get ingestProperties(): object | undefined {
        return this['ingest_properties'];
    }
    public withAgentId(agentId: string): ListViewResourceResponseBodyData {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentState(agentState: string): ListViewResourceResponseBodyData {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): string | undefined {
        return this['agent_state'];
    }
    public withInnerIp(innerIp: string): ListViewResourceResponseBodyData {
        this['inner_ip'] = innerIp;
        return this;
    }
    public set innerIp(innerIp: string  | undefined) {
        this['inner_ip'] = innerIp;
    }
    public get innerIp(): string | undefined {
        return this['inner_ip'];
    }
    public withAssociatedGroupList(associatedGroupList: object): ListViewResourceResponseBodyData {
        this['associated_group_list'] = associatedGroupList;
        return this;
    }
    public set associatedGroupList(associatedGroupList: object  | undefined) {
        this['associated_group_list'] = associatedGroupList;
    }
    public get associatedGroupList(): object | undefined {
        return this['associated_group_list'];
    }
}