import { LabelInfo } from './LabelInfo';
import { ProtectionContainerInfo } from './ProtectionContainerInfo';


export class ServerlessInstanceInfo {
    private 'enterprise_project_name'?: string;
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    private 'instance_ip'?: string;
    private 'instance_status'?: string;
    private 'namespace_name'?: string;
    private 'agent_status'?: string;
    private 'agent_id'?: string;
    private 'create_time'?: number;
    private 'subscribe_time'?: number;
    private 'cpu_request'?: string;
    private 'cpu_limit'?: string;
    private 'protect_status'?: string;
    private 'policy_group_name'?: string;
    public labels?: Array<LabelInfo>;
    private 'cluster_name'?: string;
    private 'workload_name'?: string;
    private 'cluster_id'?: string;
    private 'container_info'?: Array<ProtectionContainerInfo>;
    private 'is_support_protect'?: boolean;
    public reason?: string;
    private 'vul_num'?: number;
    private 'app_vul_num'?: number;
    private 'linux_vul_num'?: number;
    private 'security_num'?: number;
    private 'event_num'?: number;
    public constructor() { 
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): ServerlessInstanceInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withInstanceName(instanceName: string): ServerlessInstanceInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): ServerlessInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceIp(instanceIp: string): ServerlessInstanceInfo {
        this['instance_ip'] = instanceIp;
        return this;
    }
    public set instanceIp(instanceIp: string  | undefined) {
        this['instance_ip'] = instanceIp;
    }
    public get instanceIp(): string | undefined {
        return this['instance_ip'];
    }
    public withInstanceStatus(instanceStatus: string): ServerlessInstanceInfo {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withNamespaceName(namespaceName: string): ServerlessInstanceInfo {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withAgentStatus(agentStatus: string): ServerlessInstanceInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withAgentId(agentId: string): ServerlessInstanceInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withCreateTime(createTime: number): ServerlessInstanceInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withSubscribeTime(subscribeTime: number): ServerlessInstanceInfo {
        this['subscribe_time'] = subscribeTime;
        return this;
    }
    public set subscribeTime(subscribeTime: number  | undefined) {
        this['subscribe_time'] = subscribeTime;
    }
    public get subscribeTime(): number | undefined {
        return this['subscribe_time'];
    }
    public withCpuRequest(cpuRequest: string): ServerlessInstanceInfo {
        this['cpu_request'] = cpuRequest;
        return this;
    }
    public set cpuRequest(cpuRequest: string  | undefined) {
        this['cpu_request'] = cpuRequest;
    }
    public get cpuRequest(): string | undefined {
        return this['cpu_request'];
    }
    public withCpuLimit(cpuLimit: string): ServerlessInstanceInfo {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): string | undefined {
        return this['cpu_limit'];
    }
    public withProtectStatus(protectStatus: string): ServerlessInstanceInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withPolicyGroupName(policyGroupName: string): ServerlessInstanceInfo {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withLabels(labels: Array<LabelInfo>): ServerlessInstanceInfo {
        this['labels'] = labels;
        return this;
    }
    public withClusterName(clusterName: string): ServerlessInstanceInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withWorkloadName(workloadName: string): ServerlessInstanceInfo {
        this['workload_name'] = workloadName;
        return this;
    }
    public set workloadName(workloadName: string  | undefined) {
        this['workload_name'] = workloadName;
    }
    public get workloadName(): string | undefined {
        return this['workload_name'];
    }
    public withClusterId(clusterId: string): ServerlessInstanceInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContainerInfo(containerInfo: Array<ProtectionContainerInfo>): ServerlessInstanceInfo {
        this['container_info'] = containerInfo;
        return this;
    }
    public set containerInfo(containerInfo: Array<ProtectionContainerInfo>  | undefined) {
        this['container_info'] = containerInfo;
    }
    public get containerInfo(): Array<ProtectionContainerInfo> | undefined {
        return this['container_info'];
    }
    public withIsSupportProtect(isSupportProtect: boolean): ServerlessInstanceInfo {
        this['is_support_protect'] = isSupportProtect;
        return this;
    }
    public set isSupportProtect(isSupportProtect: boolean  | undefined) {
        this['is_support_protect'] = isSupportProtect;
    }
    public get isSupportProtect(): boolean | undefined {
        return this['is_support_protect'];
    }
    public withReason(reason: string): ServerlessInstanceInfo {
        this['reason'] = reason;
        return this;
    }
    public withVulNum(vulNum: number): ServerlessInstanceInfo {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
    public withAppVulNum(appVulNum: number): ServerlessInstanceInfo {
        this['app_vul_num'] = appVulNum;
        return this;
    }
    public set appVulNum(appVulNum: number  | undefined) {
        this['app_vul_num'] = appVulNum;
    }
    public get appVulNum(): number | undefined {
        return this['app_vul_num'];
    }
    public withLinuxVulNum(linuxVulNum: number): ServerlessInstanceInfo {
        this['linux_vul_num'] = linuxVulNum;
        return this;
    }
    public set linuxVulNum(linuxVulNum: number  | undefined) {
        this['linux_vul_num'] = linuxVulNum;
    }
    public get linuxVulNum(): number | undefined {
        return this['linux_vul_num'];
    }
    public withSecurityNum(securityNum: number): ServerlessInstanceInfo {
        this['security_num'] = securityNum;
        return this;
    }
    public set securityNum(securityNum: number  | undefined) {
        this['security_num'] = securityNum;
    }
    public get securityNum(): number | undefined {
        return this['security_num'];
    }
    public withEventNum(eventNum: number): ServerlessInstanceInfo {
        this['event_num'] = eventNum;
        return this;
    }
    public set eventNum(eventNum: number  | undefined) {
        this['event_num'] = eventNum;
    }
    public get eventNum(): number | undefined {
        return this['event_num'];
    }
}