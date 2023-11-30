import { CreateReleaseReqBody } from './CreateReleaseReqBody';


export class CreateReleaseRequest {
    private 'Content-Type'?: string;
    private 'cluster_id'?: string;
    public body?: CreateReleaseReqBody;
    public constructor(contentType?: string, clusterId?: string) { 
        this['Content-Type'] = contentType;
        this['cluster_id'] = clusterId;
    }
    public withContentType(contentType: string): CreateReleaseRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withClusterId(clusterId: string): CreateReleaseRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CreateReleaseReqBody): CreateReleaseRequest {
        this['body'] = body;
        return this;
    }
}