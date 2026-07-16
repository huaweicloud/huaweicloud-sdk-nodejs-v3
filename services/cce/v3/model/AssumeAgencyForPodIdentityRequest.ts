import { AssumeAgencyForPodIdentityRequestBody } from './AssumeAgencyForPodIdentityRequestBody';


export class AssumeAgencyForPodIdentityRequest {
    private 'cluster_id'?: string;
    private 'Content-Type'?: string;
    public body?: AssumeAgencyForPodIdentityRequestBody;
    public constructor(clusterId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): AssumeAgencyForPodIdentityRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): AssumeAgencyForPodIdentityRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AssumeAgencyForPodIdentityRequestBody): AssumeAgencyForPodIdentityRequest {
        this['body'] = body;
        return this;
    }
}