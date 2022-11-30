import { ResetNodeList } from './ResetNodeList';


export class ResetNodeRequest {
    private 'cluster_id': string | undefined;
    private 'Content-Type': string | undefined;
    public body?: ResetNodeList;
    public constructor(clusterId?: any, contentType?: any) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): ResetNodeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): ResetNodeRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: ResetNodeList): ResetNodeRequest {
        this['body'] = body;
        return this;
    }
}