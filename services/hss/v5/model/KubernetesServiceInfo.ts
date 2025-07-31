

export class KubernetesServiceInfo {
    public id?: string;
    public name?: string;
    private 'endpoint_name'?: string;
    public namespace?: string;
    private 'creation_timestamp'?: number;
    public type?: string;
    private 'cluster_ip'?: string;
    private 'cluster_name'?: string;
    private 'cluster_type'?: string;
    public constructor() { 
    }
    public withId(id: string): KubernetesServiceInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): KubernetesServiceInfo {
        this['name'] = name;
        return this;
    }
    public withEndpointName(endpointName: string): KubernetesServiceInfo {
        this['endpoint_name'] = endpointName;
        return this;
    }
    public set endpointName(endpointName: string  | undefined) {
        this['endpoint_name'] = endpointName;
    }
    public get endpointName(): string | undefined {
        return this['endpoint_name'];
    }
    public withNamespace(namespace: string): KubernetesServiceInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: number): KubernetesServiceInfo {
        this['creation_timestamp'] = creationTimestamp;
        return this;
    }
    public set creationTimestamp(creationTimestamp: number  | undefined) {
        this['creation_timestamp'] = creationTimestamp;
    }
    public get creationTimestamp(): number | undefined {
        return this['creation_timestamp'];
    }
    public withType(type: string): KubernetesServiceInfo {
        this['type'] = type;
        return this;
    }
    public withClusterIp(clusterIp: string): KubernetesServiceInfo {
        this['cluster_ip'] = clusterIp;
        return this;
    }
    public set clusterIp(clusterIp: string  | undefined) {
        this['cluster_ip'] = clusterIp;
    }
    public get clusterIp(): string | undefined {
        return this['cluster_ip'];
    }
    public withClusterName(clusterName: string): KubernetesServiceInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterType(clusterType: string): KubernetesServiceInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
}