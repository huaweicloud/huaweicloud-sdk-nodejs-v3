

export class ContainerCmdLogResponseInfo {
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    public time?: number;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'container_name'?: string;
    private 'container_id'?: string;
    public cmd?: string;
    public path?: string;
    private 'process_pid'?: number;
    private 'user_name'?: string;
    private 'group_name'?: string;
    private 'parent_process_pid'?: number;
    private 'parent_path'?: string;
    public constructor() { 
    }
    public withClusterName(clusterName: string): ContainerCmdLogResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ContainerCmdLogResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): ContainerCmdLogResponseInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withTime(time: number): ContainerCmdLogResponseInfo {
        this['time'] = time;
        return this;
    }
    public withHostId(hostId: string): ContainerCmdLogResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ContainerCmdLogResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ContainerCmdLogResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ContainerCmdLogResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withContainerName(containerName: string): ContainerCmdLogResponseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerId(containerId: string): ContainerCmdLogResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withCmd(cmd: string): ContainerCmdLogResponseInfo {
        this['cmd'] = cmd;
        return this;
    }
    public withPath(path: string): ContainerCmdLogResponseInfo {
        this['path'] = path;
        return this;
    }
    public withProcessPid(processPid: number): ContainerCmdLogResponseInfo {
        this['process_pid'] = processPid;
        return this;
    }
    public set processPid(processPid: number  | undefined) {
        this['process_pid'] = processPid;
    }
    public get processPid(): number | undefined {
        return this['process_pid'];
    }
    public withUserName(userName: string): ContainerCmdLogResponseInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withGroupName(groupName: string): ContainerCmdLogResponseInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withParentProcessPid(parentProcessPid: number): ContainerCmdLogResponseInfo {
        this['parent_process_pid'] = parentProcessPid;
        return this;
    }
    public set parentProcessPid(parentProcessPid: number  | undefined) {
        this['parent_process_pid'] = parentProcessPid;
    }
    public get parentProcessPid(): number | undefined {
        return this['parent_process_pid'];
    }
    public withParentPath(parentPath: string): ContainerCmdLogResponseInfo {
        this['parent_path'] = parentPath;
        return this;
    }
    public set parentPath(parentPath: string  | undefined) {
        this['parent_path'] = parentPath;
    }
    public get parentPath(): string | undefined {
        return this['parent_path'];
    }
}