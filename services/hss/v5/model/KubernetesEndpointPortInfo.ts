

export class KubernetesEndpointPortInfo {
    public id?: string;
    private 'endpoint_id'?: string;
    public name?: string;
    public protocol?: string;
    public port?: number;
    private 'app_protocol'?: string;
    public constructor() { 
    }
    public withId(id: string): KubernetesEndpointPortInfo {
        this['id'] = id;
        return this;
    }
    public withEndpointId(endpointId: string): KubernetesEndpointPortInfo {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withName(name: string): KubernetesEndpointPortInfo {
        this['name'] = name;
        return this;
    }
    public withProtocol(protocol: string): KubernetesEndpointPortInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withPort(port: number): KubernetesEndpointPortInfo {
        this['port'] = port;
        return this;
    }
    public withAppProtocol(appProtocol: string): KubernetesEndpointPortInfo {
        this['app_protocol'] = appProtocol;
        return this;
    }
    public set appProtocol(appProtocol: string  | undefined) {
        this['app_protocol'] = appProtocol;
    }
    public get appProtocol(): string | undefined {
        return this['app_protocol'];
    }
}