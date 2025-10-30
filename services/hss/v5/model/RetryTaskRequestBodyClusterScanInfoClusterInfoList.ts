

export class RetryTaskRequestBodyClusterScanInfoClusterInfoList {
    private 'cluster_id'?: string;
    private 'scan_type_list'?: Array<string>;
    public constructor() { 
    }
    public withClusterId(clusterId: string): RetryTaskRequestBodyClusterScanInfoClusterInfoList {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withScanTypeList(scanTypeList: Array<string>): RetryTaskRequestBodyClusterScanInfoClusterInfoList {
        this['scan_type_list'] = scanTypeList;
        return this;
    }
    public set scanTypeList(scanTypeList: Array<string>  | undefined) {
        this['scan_type_list'] = scanTypeList;
    }
    public get scanTypeList(): Array<string> | undefined {
        return this['scan_type_list'];
    }
}