import { MicroServiceInfoCCEServiceBase } from './MicroServiceInfoCCEServiceBase';


export class MicroServiceInfoCCEService {
    private 'cluster_id'?: string;
    public namespace?: string;
    private 'service_name'?: string;
    private 'cluster_name'?: string;
    public constructor(clusterId?: string, namespace?: string, serviceName?: string) { 
        this['cluster_id'] = clusterId;
        this['namespace'] = namespace;
        this['service_name'] = serviceName;
    }
    public withClusterId(clusterId: string): MicroServiceInfoCCEService {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): MicroServiceInfoCCEService {
        this['namespace'] = namespace;
        return this;
    }
    public withServiceName(serviceName: string): MicroServiceInfoCCEService {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withClusterName(clusterName: string): MicroServiceInfoCCEService {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
}