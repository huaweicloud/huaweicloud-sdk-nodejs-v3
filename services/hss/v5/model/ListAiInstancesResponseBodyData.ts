import { AiAgentPolicy } from './AiAgentPolicy';


export class ListAiInstancesResponseBodyData {
    private 'agent_name'?: string;
    private 'agent_id'?: string;
    private 'runtime_name'?: string;
    private 'runtime_id'?: string;
    private 'sdk_status'?: string;
    public source?: string;
    private 'agent_type'?: string;
    private 'session_number'?: number;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'image_url'?: string;
    private 'instance_create_time'?: number;
    private 'instance_update_time'?: number;
    private 'trace_alarm_number'?: number;
    private 'runtime_alarm_number'?: number;
    private 'policy_group_type'?: number;
    private 'policy_info_list'?: Array<AiAgentPolicy>;
    private 'agent_runtime_env'?: string;
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    private 'cluster_name'?: string;
    private 'host_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'host_status'?: string;
    private 'host_id'?: string;
    private 'os_type'?: string;
    private 'os_name'?: string;
    private 'os_version'?: string;
    private 'kernel_version'?: string;
    private 'agent_status'?: string;
    private 'defender_status'?: string;
    private 'container_id'?: string;
    public constructor() { 
    }
    public withAgentName(agentName: string): ListAiInstancesResponseBodyData {
        this['agent_name'] = agentName;
        return this;
    }
    public set agentName(agentName: string  | undefined) {
        this['agent_name'] = agentName;
    }
    public get agentName(): string | undefined {
        return this['agent_name'];
    }
    public withAgentId(agentId: string): ListAiInstancesResponseBodyData {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withRuntimeName(runtimeName: string): ListAiInstancesResponseBodyData {
        this['runtime_name'] = runtimeName;
        return this;
    }
    public set runtimeName(runtimeName: string  | undefined) {
        this['runtime_name'] = runtimeName;
    }
    public get runtimeName(): string | undefined {
        return this['runtime_name'];
    }
    public withRuntimeId(runtimeId: string): ListAiInstancesResponseBodyData {
        this['runtime_id'] = runtimeId;
        return this;
    }
    public set runtimeId(runtimeId: string  | undefined) {
        this['runtime_id'] = runtimeId;
    }
    public get runtimeId(): string | undefined {
        return this['runtime_id'];
    }
    public withSdkStatus(sdkStatus: string): ListAiInstancesResponseBodyData {
        this['sdk_status'] = sdkStatus;
        return this;
    }
    public set sdkStatus(sdkStatus: string  | undefined) {
        this['sdk_status'] = sdkStatus;
    }
    public get sdkStatus(): string | undefined {
        return this['sdk_status'];
    }
    public withSource(source: string): ListAiInstancesResponseBodyData {
        this['source'] = source;
        return this;
    }
    public withAgentType(agentType: string): ListAiInstancesResponseBodyData {
        this['agent_type'] = agentType;
        return this;
    }
    public set agentType(agentType: string  | undefined) {
        this['agent_type'] = agentType;
    }
    public get agentType(): string | undefined {
        return this['agent_type'];
    }
    public withSessionNumber(sessionNumber: number): ListAiInstancesResponseBodyData {
        this['session_number'] = sessionNumber;
        return this;
    }
    public set sessionNumber(sessionNumber: number  | undefined) {
        this['session_number'] = sessionNumber;
    }
    public get sessionNumber(): number | undefined {
        return this['session_number'];
    }
    public withProjectId(projectId: string): ListAiInstancesResponseBodyData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAiInstancesResponseBodyData {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageUrl(imageUrl: string): ListAiInstancesResponseBodyData {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withInstanceCreateTime(instanceCreateTime: number): ListAiInstancesResponseBodyData {
        this['instance_create_time'] = instanceCreateTime;
        return this;
    }
    public set instanceCreateTime(instanceCreateTime: number  | undefined) {
        this['instance_create_time'] = instanceCreateTime;
    }
    public get instanceCreateTime(): number | undefined {
        return this['instance_create_time'];
    }
    public withInstanceUpdateTime(instanceUpdateTime: number): ListAiInstancesResponseBodyData {
        this['instance_update_time'] = instanceUpdateTime;
        return this;
    }
    public set instanceUpdateTime(instanceUpdateTime: number  | undefined) {
        this['instance_update_time'] = instanceUpdateTime;
    }
    public get instanceUpdateTime(): number | undefined {
        return this['instance_update_time'];
    }
    public withTraceAlarmNumber(traceAlarmNumber: number): ListAiInstancesResponseBodyData {
        this['trace_alarm_number'] = traceAlarmNumber;
        return this;
    }
    public set traceAlarmNumber(traceAlarmNumber: number  | undefined) {
        this['trace_alarm_number'] = traceAlarmNumber;
    }
    public get traceAlarmNumber(): number | undefined {
        return this['trace_alarm_number'];
    }
    public withRuntimeAlarmNumber(runtimeAlarmNumber: number): ListAiInstancesResponseBodyData {
        this['runtime_alarm_number'] = runtimeAlarmNumber;
        return this;
    }
    public set runtimeAlarmNumber(runtimeAlarmNumber: number  | undefined) {
        this['runtime_alarm_number'] = runtimeAlarmNumber;
    }
    public get runtimeAlarmNumber(): number | undefined {
        return this['runtime_alarm_number'];
    }
    public withPolicyGroupType(policyGroupType: number): ListAiInstancesResponseBodyData {
        this['policy_group_type'] = policyGroupType;
        return this;
    }
    public set policyGroupType(policyGroupType: number  | undefined) {
        this['policy_group_type'] = policyGroupType;
    }
    public get policyGroupType(): number | undefined {
        return this['policy_group_type'];
    }
    public withPolicyInfoList(policyInfoList: Array<AiAgentPolicy>): ListAiInstancesResponseBodyData {
        this['policy_info_list'] = policyInfoList;
        return this;
    }
    public set policyInfoList(policyInfoList: Array<AiAgentPolicy>  | undefined) {
        this['policy_info_list'] = policyInfoList;
    }
    public get policyInfoList(): Array<AiAgentPolicy> | undefined {
        return this['policy_info_list'];
    }
    public withAgentRuntimeEnv(agentRuntimeEnv: string): ListAiInstancesResponseBodyData {
        this['agent_runtime_env'] = agentRuntimeEnv;
        return this;
    }
    public set agentRuntimeEnv(agentRuntimeEnv: string  | undefined) {
        this['agent_runtime_env'] = agentRuntimeEnv;
    }
    public get agentRuntimeEnv(): string | undefined {
        return this['agent_runtime_env'];
    }
    public withClusterId(clusterId: string): ListAiInstancesResponseBodyData {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): ListAiInstancesResponseBodyData {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withClusterName(clusterName: string): ListAiInstancesResponseBodyData {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withHostName(hostName: string): ListAiInstancesResponseBodyData {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: string): ListAiInstancesResponseBodyData {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): ListAiInstancesResponseBodyData {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withHostStatus(hostStatus: string): ListAiInstancesResponseBodyData {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withHostId(hostId: string): ListAiInstancesResponseBodyData {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withOsType(osType: string): ListAiInstancesResponseBodyData {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOsName(osName: string): ListAiInstancesResponseBodyData {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withOsVersion(osVersion: string): ListAiInstancesResponseBodyData {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withKernelVersion(kernelVersion: string): ListAiInstancesResponseBodyData {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
    public withAgentStatus(agentStatus: string): ListAiInstancesResponseBodyData {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withDefenderStatus(defenderStatus: string): ListAiInstancesResponseBodyData {
        this['defender_status'] = defenderStatus;
        return this;
    }
    public set defenderStatus(defenderStatus: string  | undefined) {
        this['defender_status'] = defenderStatus;
    }
    public get defenderStatus(): string | undefined {
        return this['defender_status'];
    }
    public withContainerId(containerId: string): ListAiInstancesResponseBodyData {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
}