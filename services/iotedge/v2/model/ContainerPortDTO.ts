

export class ContainerPortDTO {
    private 'container_port'?: number;
    private 'host_port'?: number;
    private 'host_ip'?: string;
    public constructor() { 
    }
    public withContainerPort(containerPort: number): ContainerPortDTO {
        this['container_port'] = containerPort;
        return this;
    }
    public set containerPort(containerPort: number  | undefined) {
        this['container_port'] = containerPort;
    }
    public get containerPort(): number | undefined {
        return this['container_port'];
    }
    public withHostPort(hostPort: number): ContainerPortDTO {
        this['host_port'] = hostPort;
        return this;
    }
    public set hostPort(hostPort: number  | undefined) {
        this['host_port'] = hostPort;
    }
    public get hostPort(): number | undefined {
        return this['host_port'];
    }
    public withHostIp(hostIp: string): ContainerPortDTO {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
}