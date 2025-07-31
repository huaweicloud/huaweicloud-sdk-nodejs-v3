

export class ListContainerLogsRequest {
    private 'enterprise_project_id'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public namespace?: string;
    private 'pod_name'?: string;
    private 'pod_id'?: string;
    private 'pod_ip'?: string;
    private 'host_ip'?: string;
    private 'container_id'?: string;
    private 'container_name'?: string;
    public content?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public limit?: number;
    public offset?: number;
    private 'line_num'?: string;
    public constructor(limit?: number, offset?: number) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListContainerLogsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withClusterId(clusterId: string): ListContainerLogsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ListContainerLogsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withNamespace(namespace: string): ListContainerLogsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withPodName(podName: string): ListContainerLogsRequest {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withPodId(podId: string): ListContainerLogsRequest {
        this['pod_id'] = podId;
        return this;
    }
    public set podId(podId: string  | undefined) {
        this['pod_id'] = podId;
    }
    public get podId(): string | undefined {
        return this['pod_id'];
    }
    public withPodIp(podIp: string): ListContainerLogsRequest {
        this['pod_ip'] = podIp;
        return this;
    }
    public set podIp(podIp: string  | undefined) {
        this['pod_ip'] = podIp;
    }
    public get podIp(): string | undefined {
        return this['pod_ip'];
    }
    public withHostIp(hostIp: string): ListContainerLogsRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withContainerId(containerId: string): ListContainerLogsRequest {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): ListContainerLogsRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContent(content: string): ListContainerLogsRequest {
        this['content'] = content;
        return this;
    }
    public withStartTime(startTime: number): ListContainerLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListContainerLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListContainerLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListContainerLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLineNum(lineNum: string): ListContainerLogsRequest {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
}