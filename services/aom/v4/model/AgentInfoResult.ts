

export class AgentInfoResult {
    private 'inner_ip'?: string;
    private 'import_ip'?: string;
    private 'agent_id'?: string;
    private 'host_name'?: string;
    private 'os_type'?: string;
    private 'agent_state'?: string;
    private 'project_id'?: string;
    public version?: string;
    private 'is_hw_cloud_host'?: string;
    private 'vpc_id'?: string;
    private 'cmdb_id'?: string;
    private 'ecs_id'?: string;
    private 'domain_id'?: string;
    public constructor() { 
    }
    public withInnerIp(innerIp: string): AgentInfoResult {
        this['inner_ip'] = innerIp;
        return this;
    }
    public set innerIp(innerIp: string  | undefined) {
        this['inner_ip'] = innerIp;
    }
    public get innerIp(): string | undefined {
        return this['inner_ip'];
    }
    public withImportIp(importIp: string): AgentInfoResult {
        this['import_ip'] = importIp;
        return this;
    }
    public set importIp(importIp: string  | undefined) {
        this['import_ip'] = importIp;
    }
    public get importIp(): string | undefined {
        return this['import_ip'];
    }
    public withAgentId(agentId: string): AgentInfoResult {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostName(hostName: string): AgentInfoResult {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withOsType(osType: string): AgentInfoResult {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withAgentState(agentState: string): AgentInfoResult {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): string | undefined {
        return this['agent_state'];
    }
    public withProjectId(projectId: string): AgentInfoResult {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVersion(version: string): AgentInfoResult {
        this['version'] = version;
        return this;
    }
    public withIsHwCloudHost(isHwCloudHost: string): AgentInfoResult {
        this['is_hw_cloud_host'] = isHwCloudHost;
        return this;
    }
    public set isHwCloudHost(isHwCloudHost: string  | undefined) {
        this['is_hw_cloud_host'] = isHwCloudHost;
    }
    public get isHwCloudHost(): string | undefined {
        return this['is_hw_cloud_host'];
    }
    public withVpcId(vpcId: string): AgentInfoResult {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCmdbId(cmdbId: string): AgentInfoResult {
        this['cmdb_id'] = cmdbId;
        return this;
    }
    public set cmdbId(cmdbId: string  | undefined) {
        this['cmdb_id'] = cmdbId;
    }
    public get cmdbId(): string | undefined {
        return this['cmdb_id'];
    }
    public withEcsId(ecsId: string): AgentInfoResult {
        this['ecs_id'] = ecsId;
        return this;
    }
    public set ecsId(ecsId: string  | undefined) {
        this['ecs_id'] = ecsId;
    }
    public get ecsId(): string | undefined {
        return this['ecs_id'];
    }
    public withDomainId(domainId: string): AgentInfoResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}