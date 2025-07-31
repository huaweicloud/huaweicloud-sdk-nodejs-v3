

export class ClusterContainerLogResponseInfo {
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    public time?: number;
    public namespace?: string;
    private 'pod_name'?: string;
    private 'pod_id'?: string;
    private 'pod_ip'?: string;
    private 'host_ip'?: string;
    private 'container_name'?: string;
    private 'container_id'?: string;
    public content?: string;
    private 'line_num'?: string;
    public constructor() { 
    }
    public withClusterName(clusterName: string): ClusterContainerLogResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ClusterContainerLogResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): ClusterContainerLogResponseInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withTime(time: number): ClusterContainerLogResponseInfo {
        this['time'] = time;
        return this;
    }
    public withNamespace(namespace: string): ClusterContainerLogResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withPodName(podName: string): ClusterContainerLogResponseInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withPodId(podId: string): ClusterContainerLogResponseInfo {
        this['pod_id'] = podId;
        return this;
    }
    public set podId(podId: string  | undefined) {
        this['pod_id'] = podId;
    }
    public get podId(): string | undefined {
        return this['pod_id'];
    }
    public withPodIp(podIp: string): ClusterContainerLogResponseInfo {
        this['pod_ip'] = podIp;
        return this;
    }
    public set podIp(podIp: string  | undefined) {
        this['pod_ip'] = podIp;
    }
    public get podIp(): string | undefined {
        return this['pod_ip'];
    }
    public withHostIp(hostIp: string): ClusterContainerLogResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withContainerName(containerName: string): ClusterContainerLogResponseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerId(containerId: string): ClusterContainerLogResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContent(content: string): ClusterContainerLogResponseInfo {
        this['content'] = content;
        return this;
    }
    public withLineNum(lineNum: string): ClusterContainerLogResponseInfo {
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