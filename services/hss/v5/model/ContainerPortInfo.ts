

export class ContainerPortInfo {
    private 'container_port'?: number;
    private 'host_ip'?: string;
    private 'host_port'?: number;
    private 'port_name'?: string;
    public protocol?: string;
    public constructor() { 
    }
    public withContainerPort(containerPort: number): ContainerPortInfo {
        this['container_port'] = containerPort;
        return this;
    }
    public set containerPort(containerPort: number  | undefined) {
        this['container_port'] = containerPort;
    }
    public get containerPort(): number | undefined {
        return this['container_port'];
    }
    public withHostIp(hostIp: string): ContainerPortInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withHostPort(hostPort: number): ContainerPortInfo {
        this['host_port'] = hostPort;
        return this;
    }
    public set hostPort(hostPort: number  | undefined) {
        this['host_port'] = hostPort;
    }
    public get hostPort(): number | undefined {
        return this['host_port'];
    }
    public withPortName(portName: string): ContainerPortInfo {
        this['port_name'] = portName;
        return this;
    }
    public set portName(portName: string  | undefined) {
        this['port_name'] = portName;
    }
    public get portName(): string | undefined {
        return this['port_name'];
    }
    public withProtocol(protocol: string): ContainerPortInfo {
        this['protocol'] = protocol;
        return this;
    }
}