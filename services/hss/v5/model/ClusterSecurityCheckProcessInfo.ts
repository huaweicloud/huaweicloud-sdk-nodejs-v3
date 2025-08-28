

export class ClusterSecurityCheckProcessInfo {
    private 'container_id'?: string;
    private 'container_name'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'start_time'?: number;
    public pid?: number;
    public permission?: string;
    private 'user_name'?: string;
    private 'launch_params'?: string;
    public hash?: string;
    public constructor() { 
    }
    public withContainerId(containerId: string): ClusterSecurityCheckProcessInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): ClusterSecurityCheckProcessInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withHostName(hostName: string): ClusterSecurityCheckProcessInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ClusterSecurityCheckProcessInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ClusterSecurityCheckProcessInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withStartTime(startTime: number): ClusterSecurityCheckProcessInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withPid(pid: number): ClusterSecurityCheckProcessInfo {
        this['pid'] = pid;
        return this;
    }
    public withPermission(permission: string): ClusterSecurityCheckProcessInfo {
        this['permission'] = permission;
        return this;
    }
    public withUserName(userName: string): ClusterSecurityCheckProcessInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withLaunchParams(launchParams: string): ClusterSecurityCheckProcessInfo {
        this['launch_params'] = launchParams;
        return this;
    }
    public set launchParams(launchParams: string  | undefined) {
        this['launch_params'] = launchParams;
    }
    public get launchParams(): string | undefined {
        return this['launch_params'];
    }
    public withHash(hash: string): ClusterSecurityCheckProcessInfo {
        this['hash'] = hash;
        return this;
    }
}