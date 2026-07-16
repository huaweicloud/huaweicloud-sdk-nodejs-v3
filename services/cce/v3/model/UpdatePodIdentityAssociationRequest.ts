import { PodIdentityAssociationUpdate } from './PodIdentityAssociationUpdate';


export class UpdatePodIdentityAssociationRequest {
    private 'cluster_id'?: string;
    private 'association_id'?: string;
    private 'Content-Type'?: string;
    public body?: PodIdentityAssociationUpdate;
    public constructor(clusterId?: string, associationId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['association_id'] = associationId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): UpdatePodIdentityAssociationRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAssociationId(associationId: string): UpdatePodIdentityAssociationRequest {
        this['association_id'] = associationId;
        return this;
    }
    public set associationId(associationId: string  | undefined) {
        this['association_id'] = associationId;
    }
    public get associationId(): string | undefined {
        return this['association_id'];
    }
    public withContentType(contentType: string): UpdatePodIdentityAssociationRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: PodIdentityAssociationUpdate): UpdatePodIdentityAssociationRequest {
        this['body'] = body;
        return this;
    }
}