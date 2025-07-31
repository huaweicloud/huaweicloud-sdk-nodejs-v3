

export class CreateTaskRequestBodyClusterScanInfo {
    private 'scan_type_list'?: Array<string>;
    private 'range_type'?: string;
    private 'cluster_id_list'?: Array<string>;
    public constructor(scanTypeList?: Array<string>, rangeType?: string) { 
        this['scan_type_list'] = scanTypeList;
        this['range_type'] = rangeType;
    }
    public withScanTypeList(scanTypeList: Array<string>): CreateTaskRequestBodyClusterScanInfo {
        this['scan_type_list'] = scanTypeList;
        return this;
    }
    public set scanTypeList(scanTypeList: Array<string>  | undefined) {
        this['scan_type_list'] = scanTypeList;
    }
    public get scanTypeList(): Array<string> | undefined {
        return this['scan_type_list'];
    }
    public withRangeType(rangeType: string): CreateTaskRequestBodyClusterScanInfo {
        this['range_type'] = rangeType;
        return this;
    }
    public set rangeType(rangeType: string  | undefined) {
        this['range_type'] = rangeType;
    }
    public get rangeType(): string | undefined {
        return this['range_type'];
    }
    public withClusterIdList(clusterIdList: Array<string>): CreateTaskRequestBodyClusterScanInfo {
        this['cluster_id_list'] = clusterIdList;
        return this;
    }
    public set clusterIdList(clusterIdList: Array<string>  | undefined) {
        this['cluster_id_list'] = clusterIdList;
    }
    public get clusterIdList(): Array<string> | undefined {
        return this['cluster_id_list'];
    }
}