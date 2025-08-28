

export class ClusterSecurityCheckPortInfo {
    public port?: number;
    private 'container_id'?: string;
    private 'container_name'?: string;
    private 'pod_name'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    public path?: string;
    public pid?: number;
    public laddr?: string;
    public constructor() { 
    }
    public withPort(port: number): ClusterSecurityCheckPortInfo {
        this['port'] = port;
        return this;
    }
    public withContainerId(containerId: string): ClusterSecurityCheckPortInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): ClusterSecurityCheckPortInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withPodName(podName: string): ClusterSecurityCheckPortInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withHostName(hostName: string): ClusterSecurityCheckPortInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ClusterSecurityCheckPortInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ClusterSecurityCheckPortInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPath(path: string): ClusterSecurityCheckPortInfo {
        this['path'] = path;
        return this;
    }
    public withPid(pid: number): ClusterSecurityCheckPortInfo {
        this['pid'] = pid;
        return this;
    }
    public withLaddr(laddr: string): ClusterSecurityCheckPortInfo {
        this['laddr'] = laddr;
        return this;
    }
}