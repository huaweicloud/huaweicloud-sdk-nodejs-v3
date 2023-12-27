

export class PortResponseInfo {
    private 'host_id'?: string;
    public laddr?: string;
    public status?: string;
    public port?: number;
    public type?: string;
    public pid?: number;
    public path?: string;
    private 'agent_id'?: string;
    private 'container_id'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): PortResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withLaddr(laddr: string): PortResponseInfo {
        this['laddr'] = laddr;
        return this;
    }
    public withStatus(status: string): PortResponseInfo {
        this['status'] = status;
        return this;
    }
    public withPort(port: number): PortResponseInfo {
        this['port'] = port;
        return this;
    }
    public withType(type: string): PortResponseInfo {
        this['type'] = type;
        return this;
    }
    public withPid(pid: number): PortResponseInfo {
        this['pid'] = pid;
        return this;
    }
    public withPath(path: string): PortResponseInfo {
        this['path'] = path;
        return this;
    }
    public withAgentId(agentId: string): PortResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withContainerId(containerId: string): PortResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
}