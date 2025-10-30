import { ClusterInfoResponseDsInfo } from './ClusterInfoResponseDsInfo';
import { ClusterInfoResponseRegistryInfo } from './ClusterInfoResponseRegistryInfo';


export class ClusterInfoResponse {
    private 'latest_version'?: boolean;
    private 'agent_version'?: string;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    public namespace?: string;
    private 'cluster_type'?: string;
    private 'node_num'?: number;
    private 'ds_info'?: ClusterInfoResponseDsInfo;
    private 'cluster_status'?: string;
    private 'installed_status'?: string;
    private 'access_status'?: string;
    private 'combined_status'?: string;
    private 'failed_message'?: string;
    private 'cluster_log_status'?: string;
    private 'invoked_service'?: string;
    private 'registry_info'?: ClusterInfoResponseRegistryInfo;
    public constructor() { 
    }
    public withLatestVersion(latestVersion: boolean): ClusterInfoResponse {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: boolean  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): boolean | undefined {
        return this['latest_version'];
    }
    public withAgentVersion(agentVersion: string): ClusterInfoResponse {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withClusterName(clusterName: string): ClusterInfoResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ClusterInfoResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): ClusterInfoResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withClusterType(clusterType: string): ClusterInfoResponse {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withNodeNum(nodeNum: number): ClusterInfoResponse {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withDsInfo(dsInfo: ClusterInfoResponseDsInfo): ClusterInfoResponse {
        this['ds_info'] = dsInfo;
        return this;
    }
    public set dsInfo(dsInfo: ClusterInfoResponseDsInfo  | undefined) {
        this['ds_info'] = dsInfo;
    }
    public get dsInfo(): ClusterInfoResponseDsInfo | undefined {
        return this['ds_info'];
    }
    public withClusterStatus(clusterStatus: string): ClusterInfoResponse {
        this['cluster_status'] = clusterStatus;
        return this;
    }
    public set clusterStatus(clusterStatus: string  | undefined) {
        this['cluster_status'] = clusterStatus;
    }
    public get clusterStatus(): string | undefined {
        return this['cluster_status'];
    }
    public withInstalledStatus(installedStatus: string): ClusterInfoResponse {
        this['installed_status'] = installedStatus;
        return this;
    }
    public set installedStatus(installedStatus: string  | undefined) {
        this['installed_status'] = installedStatus;
    }
    public get installedStatus(): string | undefined {
        return this['installed_status'];
    }
    public withAccessStatus(accessStatus: string): ClusterInfoResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: string  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): string | undefined {
        return this['access_status'];
    }
    public withCombinedStatus(combinedStatus: string): ClusterInfoResponse {
        this['combined_status'] = combinedStatus;
        return this;
    }
    public set combinedStatus(combinedStatus: string  | undefined) {
        this['combined_status'] = combinedStatus;
    }
    public get combinedStatus(): string | undefined {
        return this['combined_status'];
    }
    public withFailedMessage(failedMessage: string): ClusterInfoResponse {
        this['failed_message'] = failedMessage;
        return this;
    }
    public set failedMessage(failedMessage: string  | undefined) {
        this['failed_message'] = failedMessage;
    }
    public get failedMessage(): string | undefined {
        return this['failed_message'];
    }
    public withClusterLogStatus(clusterLogStatus: string): ClusterInfoResponse {
        this['cluster_log_status'] = clusterLogStatus;
        return this;
    }
    public set clusterLogStatus(clusterLogStatus: string  | undefined) {
        this['cluster_log_status'] = clusterLogStatus;
    }
    public get clusterLogStatus(): string | undefined {
        return this['cluster_log_status'];
    }
    public withInvokedService(invokedService: string): ClusterInfoResponse {
        this['invoked_service'] = invokedService;
        return this;
    }
    public set invokedService(invokedService: string  | undefined) {
        this['invoked_service'] = invokedService;
    }
    public get invokedService(): string | undefined {
        return this['invoked_service'];
    }
    public withRegistryInfo(registryInfo: ClusterInfoResponseRegistryInfo): ClusterInfoResponse {
        this['registry_info'] = registryInfo;
        return this;
    }
    public set registryInfo(registryInfo: ClusterInfoResponseRegistryInfo  | undefined) {
        this['registry_info'] = registryInfo;
    }
    public get registryInfo(): ClusterInfoResponseRegistryInfo | undefined {
        return this['registry_info'];
    }
}