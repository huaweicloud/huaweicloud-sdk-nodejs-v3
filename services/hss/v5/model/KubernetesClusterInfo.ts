

export class KubernetesClusterInfo {
    public id?: string;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    public status?: string;
    public version?: string;
    private 'total_nodes_number'?: number;
    private 'active_nodes_number'?: number;
    private 'creation_timestamp'?: number;
    private 'agent_installed_num'?: number;
    private 'agent_install_failed_num'?: number;
    private 'agent_not_install_num'?: number;
    private 'agent_ds_install_status'?: string;
    private 'agent_ds_failed_reason'?: string;
    private 'last_operate_timestamp'?: number;
    private 'last_scan_time'?: number;
    private 'sys_vul_num'?: number;
    private 'app_vul_num'?: number;
    private 'emg_vul_num'?: number;
    private 'risk_assess_num'?: number;
    private 'sec_comp_num'?: number;
    public constructor() { 
    }
    public withId(id: string): KubernetesClusterInfo {
        this['id'] = id;
        return this;
    }
    public withClusterName(clusterName: string): KubernetesClusterInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): KubernetesClusterInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): KubernetesClusterInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withStatus(status: string): KubernetesClusterInfo {
        this['status'] = status;
        return this;
    }
    public withVersion(version: string): KubernetesClusterInfo {
        this['version'] = version;
        return this;
    }
    public withTotalNodesNumber(totalNodesNumber: number): KubernetesClusterInfo {
        this['total_nodes_number'] = totalNodesNumber;
        return this;
    }
    public set totalNodesNumber(totalNodesNumber: number  | undefined) {
        this['total_nodes_number'] = totalNodesNumber;
    }
    public get totalNodesNumber(): number | undefined {
        return this['total_nodes_number'];
    }
    public withActiveNodesNumber(activeNodesNumber: number): KubernetesClusterInfo {
        this['active_nodes_number'] = activeNodesNumber;
        return this;
    }
    public set activeNodesNumber(activeNodesNumber: number  | undefined) {
        this['active_nodes_number'] = activeNodesNumber;
    }
    public get activeNodesNumber(): number | undefined {
        return this['active_nodes_number'];
    }
    public withCreationTimestamp(creationTimestamp: number): KubernetesClusterInfo {
        this['creation_timestamp'] = creationTimestamp;
        return this;
    }
    public set creationTimestamp(creationTimestamp: number  | undefined) {
        this['creation_timestamp'] = creationTimestamp;
    }
    public get creationTimestamp(): number | undefined {
        return this['creation_timestamp'];
    }
    public withAgentInstalledNum(agentInstalledNum: number): KubernetesClusterInfo {
        this['agent_installed_num'] = agentInstalledNum;
        return this;
    }
    public set agentInstalledNum(agentInstalledNum: number  | undefined) {
        this['agent_installed_num'] = agentInstalledNum;
    }
    public get agentInstalledNum(): number | undefined {
        return this['agent_installed_num'];
    }
    public withAgentInstallFailedNum(agentInstallFailedNum: number): KubernetesClusterInfo {
        this['agent_install_failed_num'] = agentInstallFailedNum;
        return this;
    }
    public set agentInstallFailedNum(agentInstallFailedNum: number  | undefined) {
        this['agent_install_failed_num'] = agentInstallFailedNum;
    }
    public get agentInstallFailedNum(): number | undefined {
        return this['agent_install_failed_num'];
    }
    public withAgentNotInstallNum(agentNotInstallNum: number): KubernetesClusterInfo {
        this['agent_not_install_num'] = agentNotInstallNum;
        return this;
    }
    public set agentNotInstallNum(agentNotInstallNum: number  | undefined) {
        this['agent_not_install_num'] = agentNotInstallNum;
    }
    public get agentNotInstallNum(): number | undefined {
        return this['agent_not_install_num'];
    }
    public withAgentDsInstallStatus(agentDsInstallStatus: string): KubernetesClusterInfo {
        this['agent_ds_install_status'] = agentDsInstallStatus;
        return this;
    }
    public set agentDsInstallStatus(agentDsInstallStatus: string  | undefined) {
        this['agent_ds_install_status'] = agentDsInstallStatus;
    }
    public get agentDsInstallStatus(): string | undefined {
        return this['agent_ds_install_status'];
    }
    public withAgentDsFailedReason(agentDsFailedReason: string): KubernetesClusterInfo {
        this['agent_ds_failed_reason'] = agentDsFailedReason;
        return this;
    }
    public set agentDsFailedReason(agentDsFailedReason: string  | undefined) {
        this['agent_ds_failed_reason'] = agentDsFailedReason;
    }
    public get agentDsFailedReason(): string | undefined {
        return this['agent_ds_failed_reason'];
    }
    public withLastOperateTimestamp(lastOperateTimestamp: number): KubernetesClusterInfo {
        this['last_operate_timestamp'] = lastOperateTimestamp;
        return this;
    }
    public set lastOperateTimestamp(lastOperateTimestamp: number  | undefined) {
        this['last_operate_timestamp'] = lastOperateTimestamp;
    }
    public get lastOperateTimestamp(): number | undefined {
        return this['last_operate_timestamp'];
    }
    public withLastScanTime(lastScanTime: number): KubernetesClusterInfo {
        this['last_scan_time'] = lastScanTime;
        return this;
    }
    public set lastScanTime(lastScanTime: number  | undefined) {
        this['last_scan_time'] = lastScanTime;
    }
    public get lastScanTime(): number | undefined {
        return this['last_scan_time'];
    }
    public withSysVulNum(sysVulNum: number): KubernetesClusterInfo {
        this['sys_vul_num'] = sysVulNum;
        return this;
    }
    public set sysVulNum(sysVulNum: number  | undefined) {
        this['sys_vul_num'] = sysVulNum;
    }
    public get sysVulNum(): number | undefined {
        return this['sys_vul_num'];
    }
    public withAppVulNum(appVulNum: number): KubernetesClusterInfo {
        this['app_vul_num'] = appVulNum;
        return this;
    }
    public set appVulNum(appVulNum: number  | undefined) {
        this['app_vul_num'] = appVulNum;
    }
    public get appVulNum(): number | undefined {
        return this['app_vul_num'];
    }
    public withEmgVulNum(emgVulNum: number): KubernetesClusterInfo {
        this['emg_vul_num'] = emgVulNum;
        return this;
    }
    public set emgVulNum(emgVulNum: number  | undefined) {
        this['emg_vul_num'] = emgVulNum;
    }
    public get emgVulNum(): number | undefined {
        return this['emg_vul_num'];
    }
    public withRiskAssessNum(riskAssessNum: number): KubernetesClusterInfo {
        this['risk_assess_num'] = riskAssessNum;
        return this;
    }
    public set riskAssessNum(riskAssessNum: number  | undefined) {
        this['risk_assess_num'] = riskAssessNum;
    }
    public get riskAssessNum(): number | undefined {
        return this['risk_assess_num'];
    }
    public withSecCompNum(secCompNum: number): KubernetesClusterInfo {
        this['sec_comp_num'] = secCompNum;
        return this;
    }
    public set secCompNum(secCompNum: number  | undefined) {
        this['sec_comp_num'] = secCompNum;
    }
    public get secCompNum(): number | undefined {
        return this['sec_comp_num'];
    }
}