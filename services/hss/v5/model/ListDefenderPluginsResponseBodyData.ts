

export class ListDefenderPluginsResponseBodyData {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_version'?: string;
    private 'instance_port'?: number;
    private 'agent_app_type'?: string;
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
    private 'failed_reason'?: string;
    private 'container_id'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListDefenderPluginsResponseBodyData {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListDefenderPluginsResponseBodyData {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceVersion(instanceVersion: string): ListDefenderPluginsResponseBodyData {
        this['instance_version'] = instanceVersion;
        return this;
    }
    public set instanceVersion(instanceVersion: string  | undefined) {
        this['instance_version'] = instanceVersion;
    }
    public get instanceVersion(): string | undefined {
        return this['instance_version'];
    }
    public withInstancePort(instancePort: number): ListDefenderPluginsResponseBodyData {
        this['instance_port'] = instancePort;
        return this;
    }
    public set instancePort(instancePort: number  | undefined) {
        this['instance_port'] = instancePort;
    }
    public get instancePort(): number | undefined {
        return this['instance_port'];
    }
    public withAgentAppType(agentAppType: string): ListDefenderPluginsResponseBodyData {
        this['agent_app_type'] = agentAppType;
        return this;
    }
    public set agentAppType(agentAppType: string  | undefined) {
        this['agent_app_type'] = agentAppType;
    }
    public get agentAppType(): string | undefined {
        return this['agent_app_type'];
    }
    public withAgentRuntimeEnv(agentRuntimeEnv: string): ListDefenderPluginsResponseBodyData {
        this['agent_runtime_env'] = agentRuntimeEnv;
        return this;
    }
    public set agentRuntimeEnv(agentRuntimeEnv: string  | undefined) {
        this['agent_runtime_env'] = agentRuntimeEnv;
    }
    public get agentRuntimeEnv(): string | undefined {
        return this['agent_runtime_env'];
    }
    public withClusterId(clusterId: string): ListDefenderPluginsResponseBodyData {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): ListDefenderPluginsResponseBodyData {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withClusterName(clusterName: string): ListDefenderPluginsResponseBodyData {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withHostName(hostName: string): ListDefenderPluginsResponseBodyData {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: string): ListDefenderPluginsResponseBodyData {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): ListDefenderPluginsResponseBodyData {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withHostStatus(hostStatus: string): ListDefenderPluginsResponseBodyData {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withHostId(hostId: string): ListDefenderPluginsResponseBodyData {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withOsType(osType: string): ListDefenderPluginsResponseBodyData {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOsName(osName: string): ListDefenderPluginsResponseBodyData {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withOsVersion(osVersion: string): ListDefenderPluginsResponseBodyData {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withKernelVersion(kernelVersion: string): ListDefenderPluginsResponseBodyData {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
    public withAgentStatus(agentStatus: string): ListDefenderPluginsResponseBodyData {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withDefenderStatus(defenderStatus: string): ListDefenderPluginsResponseBodyData {
        this['defender_status'] = defenderStatus;
        return this;
    }
    public set defenderStatus(defenderStatus: string  | undefined) {
        this['defender_status'] = defenderStatus;
    }
    public get defenderStatus(): string | undefined {
        return this['defender_status'];
    }
    public withFailedReason(failedReason: string): ListDefenderPluginsResponseBodyData {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withContainerId(containerId: string): ListDefenderPluginsResponseBodyData {
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