import { V3Cluster } from './V3Cluster';


export class CreateClusterRequest {
    private 'Content-Type': string | undefined;
    public body?: V3Cluster;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: V3Cluster): CreateClusterRequest {
        this['body'] = body;
        return this;
    }
}