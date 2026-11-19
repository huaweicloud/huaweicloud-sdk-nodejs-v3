import { LabelInfo } from './LabelInfo';
import { ServerlessInstanceInfo } from './ServerlessInstanceInfo';


export class WorkLoadInfo {
    private 'enterprise_project_name'?: string;
    private 'workload_name'?: string;
    private 'workload_id'?: string;
    private 'workload_type'?: string;
    private 'workload_status'?: string;
    private 'namespace_name'?: string;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'agent_version'?: string;
    private 'installed_pod_num'?: number;
    private 'not_install_num'?: number;
    private 'install_failed_num'?: number;
    private 'offline_num'?: number;
    private 'pod_num'?: number;
    private 'protect_pod_num'?: number;
    private 'running_job_num'?: number;
    private 'image_name'?: Array<string>;
    public labels?: Array<LabelInfo>;
    private 'instance_info'?: Array<ServerlessInstanceInfo>;
    private 'protect_status'?: string;
    private 'create_time'?: number;
    private 'last_schedule_time'?: number;
    public schedule?: string;
    public upgradable?: boolean;
    public constructor() { 
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): WorkLoadInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withWorkloadName(workloadName: string): WorkLoadInfo {
        this['workload_name'] = workloadName;
        return this;
    }
    public set workloadName(workloadName: string  | undefined) {
        this['workload_name'] = workloadName;
    }
    public get workloadName(): string | undefined {
        return this['workload_name'];
    }
    public withWorkloadId(workloadId: string): WorkLoadInfo {
        this['workload_id'] = workloadId;
        return this;
    }
    public set workloadId(workloadId: string  | undefined) {
        this['workload_id'] = workloadId;
    }
    public get workloadId(): string | undefined {
        return this['workload_id'];
    }
    public withWorkloadType(workloadType: string): WorkLoadInfo {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): string | undefined {
        return this['workload_type'];
    }
    public withWorkloadStatus(workloadStatus: string): WorkLoadInfo {
        this['workload_status'] = workloadStatus;
        return this;
    }
    public set workloadStatus(workloadStatus: string  | undefined) {
        this['workload_status'] = workloadStatus;
    }
    public get workloadStatus(): string | undefined {
        return this['workload_status'];
    }
    public withNamespaceName(namespaceName: string): WorkLoadInfo {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withClusterName(clusterName: string): WorkLoadInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): WorkLoadInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAgentVersion(agentVersion: string): WorkLoadInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withInstalledPodNum(installedPodNum: number): WorkLoadInfo {
        this['installed_pod_num'] = installedPodNum;
        return this;
    }
    public set installedPodNum(installedPodNum: number  | undefined) {
        this['installed_pod_num'] = installedPodNum;
    }
    public get installedPodNum(): number | undefined {
        return this['installed_pod_num'];
    }
    public withNotInstallNum(notInstallNum: number): WorkLoadInfo {
        this['not_install_num'] = notInstallNum;
        return this;
    }
    public set notInstallNum(notInstallNum: number  | undefined) {
        this['not_install_num'] = notInstallNum;
    }
    public get notInstallNum(): number | undefined {
        return this['not_install_num'];
    }
    public withInstallFailedNum(installFailedNum: number): WorkLoadInfo {
        this['install_failed_num'] = installFailedNum;
        return this;
    }
    public set installFailedNum(installFailedNum: number  | undefined) {
        this['install_failed_num'] = installFailedNum;
    }
    public get installFailedNum(): number | undefined {
        return this['install_failed_num'];
    }
    public withOfflineNum(offlineNum: number): WorkLoadInfo {
        this['offline_num'] = offlineNum;
        return this;
    }
    public set offlineNum(offlineNum: number  | undefined) {
        this['offline_num'] = offlineNum;
    }
    public get offlineNum(): number | undefined {
        return this['offline_num'];
    }
    public withPodNum(podNum: number): WorkLoadInfo {
        this['pod_num'] = podNum;
        return this;
    }
    public set podNum(podNum: number  | undefined) {
        this['pod_num'] = podNum;
    }
    public get podNum(): number | undefined {
        return this['pod_num'];
    }
    public withProtectPodNum(protectPodNum: number): WorkLoadInfo {
        this['protect_pod_num'] = protectPodNum;
        return this;
    }
    public set protectPodNum(protectPodNum: number  | undefined) {
        this['protect_pod_num'] = protectPodNum;
    }
    public get protectPodNum(): number | undefined {
        return this['protect_pod_num'];
    }
    public withRunningJobNum(runningJobNum: number): WorkLoadInfo {
        this['running_job_num'] = runningJobNum;
        return this;
    }
    public set runningJobNum(runningJobNum: number  | undefined) {
        this['running_job_num'] = runningJobNum;
    }
    public get runningJobNum(): number | undefined {
        return this['running_job_num'];
    }
    public withImageName(imageName: Array<string>): WorkLoadInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: Array<string>  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): Array<string> | undefined {
        return this['image_name'];
    }
    public withLabels(labels: Array<LabelInfo>): WorkLoadInfo {
        this['labels'] = labels;
        return this;
    }
    public withInstanceInfo(instanceInfo: Array<ServerlessInstanceInfo>): WorkLoadInfo {
        this['instance_info'] = instanceInfo;
        return this;
    }
    public set instanceInfo(instanceInfo: Array<ServerlessInstanceInfo>  | undefined) {
        this['instance_info'] = instanceInfo;
    }
    public get instanceInfo(): Array<ServerlessInstanceInfo> | undefined {
        return this['instance_info'];
    }
    public withProtectStatus(protectStatus: string): WorkLoadInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withCreateTime(createTime: number): WorkLoadInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastScheduleTime(lastScheduleTime: number): WorkLoadInfo {
        this['last_schedule_time'] = lastScheduleTime;
        return this;
    }
    public set lastScheduleTime(lastScheduleTime: number  | undefined) {
        this['last_schedule_time'] = lastScheduleTime;
    }
    public get lastScheduleTime(): number | undefined {
        return this['last_schedule_time'];
    }
    public withSchedule(schedule: string): WorkLoadInfo {
        this['schedule'] = schedule;
        return this;
    }
    public withUpgradable(upgradable: boolean): WorkLoadInfo {
        this['upgradable'] = upgradable;
        return this;
    }
}