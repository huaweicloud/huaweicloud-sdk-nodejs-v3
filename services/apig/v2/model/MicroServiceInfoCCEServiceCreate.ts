import { MicroServiceInfoCCEServiceBase } from './MicroServiceInfoCCEServiceBase';


export class MicroServiceInfoCCEServiceCreate {
    private 'cluster_id'?: string;
    public namespace?: string;
    private 'service_name'?: string;
    public port?: number;
    public constructor(clusterId?: string, namespace?: string, serviceName?: string) { 
        this['cluster_id'] = clusterId;
        this['namespace'] = namespace;
        this['service_name'] = serviceName;
    }
    public withClusterId(clusterId: string): MicroServiceInfoCCEServiceCreate {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): MicroServiceInfoCCEServiceCreate {
        this['namespace'] = namespace;
        return this;
    }
    public withServiceName(serviceName: string): MicroServiceInfoCCEServiceCreate {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withPort(port: number): MicroServiceInfoCCEServiceCreate {
        this['port'] = port;
        return this;
    }
}