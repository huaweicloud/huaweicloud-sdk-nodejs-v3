

export class PortHostResponseInfo {
    private 'container_id'?: string;
    private 'host_id'?: string;
    private 'host_ip'?: string;
    private 'host_name'?: string;
    public laddr?: string;
    public path?: string;
    public pid?: number;
    public port?: number;
    public status?: string;
    public type?: string;
    private 'container_name'?: string;
    private 'agent_id'?: string;
    public constructor() { 
    }
    public withContainerId(containerId: string): PortHostResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withHostId(hostId: string): PortHostResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostIp(hostIp: string): PortHostResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withHostName(hostName: string): PortHostResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withLaddr(laddr: string): PortHostResponseInfo {
        this['laddr'] = laddr;
        return this;
    }
    public withPath(path: string): PortHostResponseInfo {
        this['path'] = path;
        return this;
    }
    public withPid(pid: number): PortHostResponseInfo {
        this['pid'] = pid;
        return this;
    }
    public withPort(port: number): PortHostResponseInfo {
        this['port'] = port;
        return this;
    }
    public withStatus(status: string): PortHostResponseInfo {
        this['status'] = status;
        return this;
    }
    public withType(type: string): PortHostResponseInfo {
        this['type'] = type;
        return this;
    }
    public withContainerName(containerName: string): PortHostResponseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withAgentId(agentId: string): PortHostResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
}