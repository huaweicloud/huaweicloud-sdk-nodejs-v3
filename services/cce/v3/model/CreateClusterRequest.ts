import { Cluster } from './Cluster';


export class CreateClusterRequest {
    private 'Content-Type'?: string;
    public body?: Cluster;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: Cluster): CreateClusterRequest {
        this['body'] = body;
        return this;
    }
}