

export class KubernetesServicePortInfo {
    public id?: string;
    private 'service_id'?: string;
    public name?: string;
    public protocol?: string;
    public port?: number;
    private 'target_port'?: string;
    private 'node_port'?: number;
    public constructor() { 
    }
    public withId(id: string): KubernetesServicePortInfo {
        this['id'] = id;
        return this;
    }
    public withServiceId(serviceId: string): KubernetesServicePortInfo {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withName(name: string): KubernetesServicePortInfo {
        this['name'] = name;
        return this;
    }
    public withProtocol(protocol: string): KubernetesServicePortInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withPort(port: number): KubernetesServicePortInfo {
        this['port'] = port;
        return this;
    }
    public withTargetPort(targetPort: string): KubernetesServicePortInfo {
        this['target_port'] = targetPort;
        return this;
    }
    public set targetPort(targetPort: string  | undefined) {
        this['target_port'] = targetPort;
    }
    public get targetPort(): string | undefined {
        return this['target_port'];
    }
    public withNodePort(nodePort: number): KubernetesServicePortInfo {
        this['node_port'] = nodePort;
        return this;
    }
    public set nodePort(nodePort: number  | undefined) {
        this['node_port'] = nodePort;
    }
    public get nodePort(): number | undefined {
        return this['node_port'];
    }
}