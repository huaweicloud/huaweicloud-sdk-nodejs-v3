

export class BatchDeleteDaemonsetRequestBody {
    private 'cluster_ids'?: Array<string>;
    private 'invoked_service'?: string;
    public constructor(clusterIds?: Array<string>) { 
        this['cluster_ids'] = clusterIds;
    }
    public withClusterIds(clusterIds: Array<string>): BatchDeleteDaemonsetRequestBody {
        this['cluster_ids'] = clusterIds;
        return this;
    }
    public set clusterIds(clusterIds: Array<string>  | undefined) {
        this['cluster_ids'] = clusterIds;
    }
    public get clusterIds(): Array<string> | undefined {
        return this['cluster_ids'];
    }
    public withInvokedService(invokedService: string): BatchDeleteDaemonsetRequestBody {
        this['invoked_service'] = invokedService;
        return this;
    }
    public set invokedService(invokedService: string  | undefined) {
        this['invoked_service'] = invokedService;
    }
    public get invokedService(): string | undefined {
        return this['invoked_service'];
    }
}