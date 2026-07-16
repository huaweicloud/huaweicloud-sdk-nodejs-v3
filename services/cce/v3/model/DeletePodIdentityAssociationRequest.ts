

export class DeletePodIdentityAssociationRequest {
    private 'cluster_id'?: string;
    private 'association_id'?: string;
    public constructor(clusterId?: string, associationId?: string) { 
        this['cluster_id'] = clusterId;
        this['association_id'] = associationId;
    }
    public withClusterId(clusterId: string): DeletePodIdentityAssociationRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAssociationId(associationId: string): DeletePodIdentityAssociationRequest {
        this['association_id'] = associationId;
        return this;
    }
    public set associationId(associationId: string  | undefined) {
        this['association_id'] = associationId;
    }
    public get associationId(): string | undefined {
        return this['association_id'];
    }
}