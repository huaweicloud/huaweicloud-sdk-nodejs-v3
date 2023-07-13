import { ReconfigureExtDataSourceActionReq } from './ReconfigureExtDataSourceActionReq';


export class UpdateDataSourceRequest {
    private 'cluster_id': string | undefined;
    private 'ext_data_source_id': string | undefined;
    public body?: ReconfigureExtDataSourceActionReq;
    public constructor(clusterId?: any, extDataSourceId?: any) { 
        this['cluster_id'] = clusterId;
        this['ext_data_source_id'] = extDataSourceId;
    }
    public withClusterId(clusterId: string): UpdateDataSourceRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withExtDataSourceId(extDataSourceId: string): UpdateDataSourceRequest {
        this['ext_data_source_id'] = extDataSourceId;
        return this;
    }
    public set extDataSourceId(extDataSourceId: string | undefined) {
        this['ext_data_source_id'] = extDataSourceId;
    }
    public get extDataSourceId() {
        return this['ext_data_source_id'];
    }
    public withBody(body: ReconfigureExtDataSourceActionReq): UpdateDataSourceRequest {
        this['body'] = body;
        return this;
    }
}