

export class ListAgentInstancesRequest {
    private 'ai_agent_type'?: Array<string>;
    private 'region_id'?: Array<string>;
    private 'agent_status'?: Array<string>;
    private 'desktop_status'?: Array<string>;
    private 'desktop_connection'?: Array<string>;
    private 'model_group_id'?: string;
    private 'channel_config_status'?: Array<string>;
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    private 'desktop_id'?: string;
    private 'create_time_start'?: Date;
    private 'create_time_end'?: Date;
    public tags?: string;
    private 'risk_type'?: Array<string>;
    private 'model_config_status'?: Array<string>;
    private 'agent_version'?: string;
    private 'sort_field'?: string;
    private 'sort_order'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withAiAgentType(aiAgentType: Array<string>): ListAgentInstancesRequest {
        this['ai_agent_type'] = aiAgentType;
        return this;
    }
    public set aiAgentType(aiAgentType: Array<string>  | undefined) {
        this['ai_agent_type'] = aiAgentType;
    }
    public get aiAgentType(): Array<string> | undefined {
        return this['ai_agent_type'];
    }
    public withRegionId(regionId: Array<string>): ListAgentInstancesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: Array<string>  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): Array<string> | undefined {
        return this['region_id'];
    }
    public withAgentStatus(agentStatus: Array<string>): ListAgentInstancesRequest {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: Array<string>  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): Array<string> | undefined {
        return this['agent_status'];
    }
    public withDesktopStatus(desktopStatus: Array<string>): ListAgentInstancesRequest {
        this['desktop_status'] = desktopStatus;
        return this;
    }
    public set desktopStatus(desktopStatus: Array<string>  | undefined) {
        this['desktop_status'] = desktopStatus;
    }
    public get desktopStatus(): Array<string> | undefined {
        return this['desktop_status'];
    }
    public withDesktopConnection(desktopConnection: Array<string>): ListAgentInstancesRequest {
        this['desktop_connection'] = desktopConnection;
        return this;
    }
    public set desktopConnection(desktopConnection: Array<string>  | undefined) {
        this['desktop_connection'] = desktopConnection;
    }
    public get desktopConnection(): Array<string> | undefined {
        return this['desktop_connection'];
    }
    public withModelGroupId(modelGroupId: string): ListAgentInstancesRequest {
        this['model_group_id'] = modelGroupId;
        return this;
    }
    public set modelGroupId(modelGroupId: string  | undefined) {
        this['model_group_id'] = modelGroupId;
    }
    public get modelGroupId(): string | undefined {
        return this['model_group_id'];
    }
    public withChannelConfigStatus(channelConfigStatus: Array<string>): ListAgentInstancesRequest {
        this['channel_config_status'] = channelConfigStatus;
        return this;
    }
    public set channelConfigStatus(channelConfigStatus: Array<string>  | undefined) {
        this['channel_config_status'] = channelConfigStatus;
    }
    public get channelConfigStatus(): Array<string> | undefined {
        return this['channel_config_status'];
    }
    public withInstanceName(instanceName: string): ListAgentInstancesRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): ListAgentInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDesktopId(desktopId: string): ListAgentInstancesRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withCreateTimeStart(createTimeStart: Date): ListAgentInstancesRequest {
        this['create_time_start'] = createTimeStart;
        return this;
    }
    public set createTimeStart(createTimeStart: Date  | undefined) {
        this['create_time_start'] = createTimeStart;
    }
    public get createTimeStart(): Date | undefined {
        return this['create_time_start'];
    }
    public withCreateTimeEnd(createTimeEnd: Date): ListAgentInstancesRequest {
        this['create_time_end'] = createTimeEnd;
        return this;
    }
    public set createTimeEnd(createTimeEnd: Date  | undefined) {
        this['create_time_end'] = createTimeEnd;
    }
    public get createTimeEnd(): Date | undefined {
        return this['create_time_end'];
    }
    public withTags(tags: string): ListAgentInstancesRequest {
        this['tags'] = tags;
        return this;
    }
    public withRiskType(riskType: Array<string>): ListAgentInstancesRequest {
        this['risk_type'] = riskType;
        return this;
    }
    public set riskType(riskType: Array<string>  | undefined) {
        this['risk_type'] = riskType;
    }
    public get riskType(): Array<string> | undefined {
        return this['risk_type'];
    }
    public withModelConfigStatus(modelConfigStatus: Array<string>): ListAgentInstancesRequest {
        this['model_config_status'] = modelConfigStatus;
        return this;
    }
    public set modelConfigStatus(modelConfigStatus: Array<string>  | undefined) {
        this['model_config_status'] = modelConfigStatus;
    }
    public get modelConfigStatus(): Array<string> | undefined {
        return this['model_config_status'];
    }
    public withAgentVersion(agentVersion: string): ListAgentInstancesRequest {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withSortField(sortField: string): ListAgentInstancesRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortOrder(sortOrder: string): ListAgentInstancesRequest {
        this['sort_order'] = sortOrder;
        return this;
    }
    public set sortOrder(sortOrder: string  | undefined) {
        this['sort_order'] = sortOrder;
    }
    public get sortOrder(): string | undefined {
        return this['sort_order'];
    }
    public withOffset(offset: number): ListAgentInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAgentInstancesRequest {
        this['limit'] = limit;
        return this;
    }
}