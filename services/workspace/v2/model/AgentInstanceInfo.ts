import { AgentRisk } from './AgentRisk';


export class AgentInstanceInfo {
    public id?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'desktop_id'?: string;
    private 'region_id'?: string;
    private 'ai_agent_type'?: string;
    private 'agent_status'?: string;
    private 'desktop_status'?: string;
    private 'desktop_connection'?: string;
    private 'model_config_status'?: string;
    private 'channel_config_status'?: string;
    private 'im_channel_configs'?: Array<string>;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'product_id'?: string;
    private 'product_name'?: string;
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'desktop_pool_id'?: string;
    private 'user_name'?: string;
    public risks?: Array<AgentRisk>;
    private 'agent_version'?: string;
    private 'enterprise_project_id'?: string;
    private 'security_policy_control'?: number;
    public constructor() { 
    }
    public withId(id: string): AgentInstanceInfo {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): AgentInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): AgentInstanceInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDesktopId(desktopId: string): AgentInstanceInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withRegionId(regionId: string): AgentInstanceInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAiAgentType(aiAgentType: string): AgentInstanceInfo {
        this['ai_agent_type'] = aiAgentType;
        return this;
    }
    public set aiAgentType(aiAgentType: string  | undefined) {
        this['ai_agent_type'] = aiAgentType;
    }
    public get aiAgentType(): string | undefined {
        return this['ai_agent_type'];
    }
    public withAgentStatus(agentStatus: string): AgentInstanceInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withDesktopStatus(desktopStatus: string): AgentInstanceInfo {
        this['desktop_status'] = desktopStatus;
        return this;
    }
    public set desktopStatus(desktopStatus: string  | undefined) {
        this['desktop_status'] = desktopStatus;
    }
    public get desktopStatus(): string | undefined {
        return this['desktop_status'];
    }
    public withDesktopConnection(desktopConnection: string): AgentInstanceInfo {
        this['desktop_connection'] = desktopConnection;
        return this;
    }
    public set desktopConnection(desktopConnection: string  | undefined) {
        this['desktop_connection'] = desktopConnection;
    }
    public get desktopConnection(): string | undefined {
        return this['desktop_connection'];
    }
    public withModelConfigStatus(modelConfigStatus: string): AgentInstanceInfo {
        this['model_config_status'] = modelConfigStatus;
        return this;
    }
    public set modelConfigStatus(modelConfigStatus: string  | undefined) {
        this['model_config_status'] = modelConfigStatus;
    }
    public get modelConfigStatus(): string | undefined {
        return this['model_config_status'];
    }
    public withChannelConfigStatus(channelConfigStatus: string): AgentInstanceInfo {
        this['channel_config_status'] = channelConfigStatus;
        return this;
    }
    public set channelConfigStatus(channelConfigStatus: string  | undefined) {
        this['channel_config_status'] = channelConfigStatus;
    }
    public get channelConfigStatus(): string | undefined {
        return this['channel_config_status'];
    }
    public withImChannelConfigs(imChannelConfigs: Array<string>): AgentInstanceInfo {
        this['im_channel_configs'] = imChannelConfigs;
        return this;
    }
    public set imChannelConfigs(imChannelConfigs: Array<string>  | undefined) {
        this['im_channel_configs'] = imChannelConfigs;
    }
    public get imChannelConfigs(): Array<string> | undefined {
        return this['im_channel_configs'];
    }
    public withCreateTime(createTime: Date): AgentInstanceInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): AgentInstanceInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withProductId(productId: string): AgentInstanceInfo {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProductName(productName: string): AgentInstanceInfo {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withImageId(imageId: string): AgentInstanceInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): AgentInstanceInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withDesktopPoolId(desktopPoolId: string): AgentInstanceInfo {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withUserName(userName: string): AgentInstanceInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withRisks(risks: Array<AgentRisk>): AgentInstanceInfo {
        this['risks'] = risks;
        return this;
    }
    public withAgentVersion(agentVersion: string): AgentInstanceInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AgentInstanceInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSecurityPolicyControl(securityPolicyControl: number): AgentInstanceInfo {
        this['security_policy_control'] = securityPolicyControl;
        return this;
    }
    public set securityPolicyControl(securityPolicyControl: number  | undefined) {
        this['security_policy_control'] = securityPolicyControl;
    }
    public get securityPolicyControl(): number | undefined {
        return this['security_policy_control'];
    }
}