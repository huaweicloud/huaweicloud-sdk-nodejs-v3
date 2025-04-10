

export class ContainerNodeInfo {
    private 'agent_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_status'?: string;
    private 'agent_status'?: string;
    private 'protect_status'?: string;
    private 'protect_interrupt'?: boolean;
    private 'protect_degradation'?: boolean;
    private 'degradation_reason'?: string;
    private 'container_tags'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'resource_id'?: string;
    private 'group_name'?: string;
    private 'enterprise_project_name'?: string;
    private 'detect_result'?: string;
    public asset?: number;
    public vulnerability?: number;
    public intrusion?: number;
    private 'policy_group_id'?: string;
    private 'policy_group_name'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): ContainerNodeInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostId(hostId: string): ContainerNodeInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ContainerNodeInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostStatus(hostStatus: string): ContainerNodeInfo {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withAgentStatus(agentStatus: string): ContainerNodeInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withProtectStatus(protectStatus: string): ContainerNodeInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withProtectInterrupt(protectInterrupt: boolean): ContainerNodeInfo {
        this['protect_interrupt'] = protectInterrupt;
        return this;
    }
    public set protectInterrupt(protectInterrupt: boolean  | undefined) {
        this['protect_interrupt'] = protectInterrupt;
    }
    public get protectInterrupt(): boolean | undefined {
        return this['protect_interrupt'];
    }
    public withProtectDegradation(protectDegradation: boolean): ContainerNodeInfo {
        this['protect_degradation'] = protectDegradation;
        return this;
    }
    public set protectDegradation(protectDegradation: boolean  | undefined) {
        this['protect_degradation'] = protectDegradation;
    }
    public get protectDegradation(): boolean | undefined {
        return this['protect_degradation'];
    }
    public withDegradationReason(degradationReason: string): ContainerNodeInfo {
        this['degradation_reason'] = degradationReason;
        return this;
    }
    public set degradationReason(degradationReason: string  | undefined) {
        this['degradation_reason'] = degradationReason;
    }
    public get degradationReason(): string | undefined {
        return this['degradation_reason'];
    }
    public withContainerTags(containerTags: string): ContainerNodeInfo {
        this['container_tags'] = containerTags;
        return this;
    }
    public set containerTags(containerTags: string  | undefined) {
        this['container_tags'] = containerTags;
    }
    public get containerTags(): string | undefined {
        return this['container_tags'];
    }
    public withPrivateIp(privateIp: string): ContainerNodeInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ContainerNodeInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withResourceId(resourceId: string): ContainerNodeInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withGroupName(groupName: string): ContainerNodeInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): ContainerNodeInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withDetectResult(detectResult: string): ContainerNodeInfo {
        this['detect_result'] = detectResult;
        return this;
    }
    public set detectResult(detectResult: string  | undefined) {
        this['detect_result'] = detectResult;
    }
    public get detectResult(): string | undefined {
        return this['detect_result'];
    }
    public withAsset(asset: number): ContainerNodeInfo {
        this['asset'] = asset;
        return this;
    }
    public withVulnerability(vulnerability: number): ContainerNodeInfo {
        this['vulnerability'] = vulnerability;
        return this;
    }
    public withIntrusion(intrusion: number): ContainerNodeInfo {
        this['intrusion'] = intrusion;
        return this;
    }
    public withPolicyGroupId(policyGroupId: string): ContainerNodeInfo {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withPolicyGroupName(policyGroupName: string): ContainerNodeInfo {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
}