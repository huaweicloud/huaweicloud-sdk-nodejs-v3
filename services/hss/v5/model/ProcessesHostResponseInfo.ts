

export class ProcessesHostResponseInfo {
    public hash?: string;
    private 'host_ip'?: string;
    private 'host_name'?: string;
    private 'launch_params'?: string;
    private 'launch_time'?: number;
    private 'process_path'?: string;
    private 'process_pid'?: number;
    private 'run_permission'?: string;
    private 'container_id'?: string;
    private 'container_name'?: string;
    public constructor() { 
    }
    public withHash(hash: string): ProcessesHostResponseInfo {
        this['hash'] = hash;
        return this;
    }
    public withHostIp(hostIp: string): ProcessesHostResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withHostName(hostName: string): ProcessesHostResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withLaunchParams(launchParams: string): ProcessesHostResponseInfo {
        this['launch_params'] = launchParams;
        return this;
    }
    public set launchParams(launchParams: string  | undefined) {
        this['launch_params'] = launchParams;
    }
    public get launchParams(): string | undefined {
        return this['launch_params'];
    }
    public withLaunchTime(launchTime: number): ProcessesHostResponseInfo {
        this['launch_time'] = launchTime;
        return this;
    }
    public set launchTime(launchTime: number  | undefined) {
        this['launch_time'] = launchTime;
    }
    public get launchTime(): number | undefined {
        return this['launch_time'];
    }
    public withProcessPath(processPath: string): ProcessesHostResponseInfo {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withProcessPid(processPid: number): ProcessesHostResponseInfo {
        this['process_pid'] = processPid;
        return this;
    }
    public set processPid(processPid: number  | undefined) {
        this['process_pid'] = processPid;
    }
    public get processPid(): number | undefined {
        return this['process_pid'];
    }
    public withRunPermission(runPermission: string): ProcessesHostResponseInfo {
        this['run_permission'] = runPermission;
        return this;
    }
    public set runPermission(runPermission: string  | undefined) {
        this['run_permission'] = runPermission;
    }
    public get runPermission(): string | undefined {
        return this['run_permission'];
    }
    public withContainerId(containerId: string): ProcessesHostResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): ProcessesHostResponseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
}