

export class PortStatusRequestInfo {
    private 'agent_id'?: string;
    public port?: number;
    private 'port_type'?: string;
    private 'container_id'?: string;
    private 'host_id'?: string;
    public constructor(agentId?: string, port?: number, portType?: string) { 
        this['agent_id'] = agentId;
        this['port'] = port;
        this['port_type'] = portType;
    }
    public withAgentId(agentId: string): PortStatusRequestInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withPort(port: number): PortStatusRequestInfo {
        this['port'] = port;
        return this;
    }
    public withPortType(portType: string): PortStatusRequestInfo {
        this['port_type'] = portType;
        return this;
    }
    public set portType(portType: string  | undefined) {
        this['port_type'] = portType;
    }
    public get portType(): string | undefined {
        return this['port_type'];
    }
    public withContainerId(containerId: string): PortStatusRequestInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withHostId(hostId: string): PortStatusRequestInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}