

export class DeleteDataSourceRequest {
    private 'cluster_id': string | undefined;
    private 'ext_data_source_id': string | undefined;
    public constructor(clusterId?: any, extDataSourceId?: any) { 
        this['cluster_id'] = clusterId;
        this['ext_data_source_id'] = extDataSourceId;
    }
    public withClusterId(clusterId: string): DeleteDataSourceRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withExtDataSourceId(extDataSourceId: string): DeleteDataSourceRequest {
        this['ext_data_source_id'] = extDataSourceId;
        return this;
    }
    public set extDataSourceId(extDataSourceId: string | undefined) {
        this['ext_data_source_id'] = extDataSourceId;
    }
    public get extDataSourceId() {
        return this['ext_data_source_id'];
    }
}