

export class KubernetesEndpointInfo {
    public id?: string;
    public name?: string;
    private 'service_name'?: string;
    public namespace?: string;
    private 'creation_timestamp'?: number;
    private 'cluster_name'?: string;
    private 'cluster_type'?: string;
    private 'association_service'?: boolean;
    public constructor() { 
    }
    public withId(id: string): KubernetesEndpointInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): KubernetesEndpointInfo {
        this['name'] = name;
        return this;
    }
    public withServiceName(serviceName: string): KubernetesEndpointInfo {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withNamespace(namespace: string): KubernetesEndpointInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: number): KubernetesEndpointInfo {
        this['creation_timestamp'] = creationTimestamp;
        return this;
    }
    public set creationTimestamp(creationTimestamp: number  | undefined) {
        this['creation_timestamp'] = creationTimestamp;
    }
    public get creationTimestamp(): number | undefined {
        return this['creation_timestamp'];
    }
    public withClusterName(clusterName: string): KubernetesEndpointInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterType(clusterType: string): KubernetesEndpointInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withAssociationService(associationService: boolean): KubernetesEndpointInfo {
        this['association_service'] = associationService;
        return this;
    }
    public set associationService(associationService: boolean  | undefined) {
        this['association_service'] = associationService;
    }
    public get associationService(): boolean | undefined {
        return this['association_service'];
    }
}