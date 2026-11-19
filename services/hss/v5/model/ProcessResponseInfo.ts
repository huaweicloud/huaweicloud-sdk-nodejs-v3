

export class ProcessResponseInfo {
    private 'agent_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'process_path'?: string;
    private 'launch_params'?: string;
    private 'launch_time'?: number;
    private 'user_name'?: string;
    private 'run_permission'?: string;
    private 'process_pid'?: number;
    private 'parent_process_pid'?: number;
    private 'parent_process_name'?: string;
    public hash?: string;
    private 'container_id'?: string;
    private 'container_name'?: string;
    private 'pod_id'?: string;
    private 'pod_name'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): ProcessResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostId(hostId: string): ProcessResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ProcessResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ProcessResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withProcessPath(processPath: string): ProcessResponseInfo {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withLaunchParams(launchParams: string): ProcessResponseInfo {
        this['launch_params'] = launchParams;
        return this;
    }
    public set launchParams(launchParams: string  | undefined) {
        this['launch_params'] = launchParams;
    }
    public get launchParams(): string | undefined {
        return this['launch_params'];
    }
    public withLaunchTime(launchTime: number): ProcessResponseInfo {
        this['launch_time'] = launchTime;
        return this;
    }
    public set launchTime(launchTime: number  | undefined) {
        this['launch_time'] = launchTime;
    }
    public get launchTime(): number | undefined {
        return this['launch_time'];
    }
    public withUserName(userName: string): ProcessResponseInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withRunPermission(runPermission: string): ProcessResponseInfo {
        this['run_permission'] = runPermission;
        return this;
    }
    public set runPermission(runPermission: string  | undefined) {
        this['run_permission'] = runPermission;
    }
    public get runPermission(): string | undefined {
        return this['run_permission'];
    }
    public withProcessPid(processPid: number): ProcessResponseInfo {
        this['process_pid'] = processPid;
        return this;
    }
    public set processPid(processPid: number  | undefined) {
        this['process_pid'] = processPid;
    }
    public get processPid(): number | undefined {
        return this['process_pid'];
    }
    public withParentProcessPid(parentProcessPid: number): ProcessResponseInfo {
        this['parent_process_pid'] = parentProcessPid;
        return this;
    }
    public set parentProcessPid(parentProcessPid: number  | undefined) {
        this['parent_process_pid'] = parentProcessPid;
    }
    public get parentProcessPid(): number | undefined {
        return this['parent_process_pid'];
    }
    public withParentProcessName(parentProcessName: string): ProcessResponseInfo {
        this['parent_process_name'] = parentProcessName;
        return this;
    }
    public set parentProcessName(parentProcessName: string  | undefined) {
        this['parent_process_name'] = parentProcessName;
    }
    public get parentProcessName(): string | undefined {
        return this['parent_process_name'];
    }
    public withHash(hash: string): ProcessResponseInfo {
        this['hash'] = hash;
        return this;
    }
    public withContainerId(containerId: string): ProcessResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): ProcessResponseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withPodId(podId: string): ProcessResponseInfo {
        this['pod_id'] = podId;
        return this;
    }
    public set podId(podId: string  | undefined) {
        this['pod_id'] = podId;
    }
    public get podId(): string | undefined {
        return this['pod_id'];
    }
    public withPodName(podName: string): ProcessResponseInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
}