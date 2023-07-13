import { ExtDataSourceReq } from './ExtDataSourceReq';


export class CreateDataSourceRequest {
    private 'cluster_id': string | undefined;
    public body?: ExtDataSourceReq;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateDataSourceRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: ExtDataSourceReq): CreateDataSourceRequest {
        this['body'] = body;
        return this;
    }
}