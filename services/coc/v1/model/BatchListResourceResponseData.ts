import { Tag } from './Tag';


export class BatchListResourceResponseData {
    public id?: string;
    private 'resource_id'?: string;
    private 'domain_id'?: string;
    public name?: string;
    public provider?: string;
    public type?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'ep_id'?: string;
    public tags?: Array<Tag>;
    private 'agent_id'?: string;
    private 'agent_state'?: string;
    public properties?: { [key: string]: object; };
    private 'ingest_properties'?: { [key: string]: string; };
    private 'is_delegated'?: boolean;
    public operable?: string;
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
    public withTags(tags: Array<Tag>): BatchListResourceResponseData {
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
    public withAgentState(agentState: string): BatchListResourceResponseData {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): string | undefined {
        return this['agent_state'];
    }
    public withProperties(properties: { [key: string]: object; }): BatchListResourceResponseData {
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
    public withOperable(operable: string): BatchListResourceResponseData {
        this['operable'] = operable;
        return this;
    }
}