

export class ListTasksResponseInfoClusterScanInfo {
    private 'scan_type_list'?: Array<string>;
    private 'scanning_cluster_num'?: number;
    private 'success_cluster_num'?: number;
    private 'failed_cluster_num'?: number;
    public constructor() { 
    }
    public withScanTypeList(scanTypeList: Array<string>): ListTasksResponseInfoClusterScanInfo {
        this['scan_type_list'] = scanTypeList;
        return this;
    }
    public set scanTypeList(scanTypeList: Array<string>  | undefined) {
        this['scan_type_list'] = scanTypeList;
    }
    public get scanTypeList(): Array<string> | undefined {
        return this['scan_type_list'];
    }
    public withScanningClusterNum(scanningClusterNum: number): ListTasksResponseInfoClusterScanInfo {
        this['scanning_cluster_num'] = scanningClusterNum;
        return this;
    }
    public set scanningClusterNum(scanningClusterNum: number  | undefined) {
        this['scanning_cluster_num'] = scanningClusterNum;
    }
    public get scanningClusterNum(): number | undefined {
        return this['scanning_cluster_num'];
    }
    public withSuccessClusterNum(successClusterNum: number): ListTasksResponseInfoClusterScanInfo {
        this['success_cluster_num'] = successClusterNum;
        return this;
    }
    public set successClusterNum(successClusterNum: number  | undefined) {
        this['success_cluster_num'] = successClusterNum;
    }
    public get successClusterNum(): number | undefined {
        return this['success_cluster_num'];
    }
    public withFailedClusterNum(failedClusterNum: number): ListTasksResponseInfoClusterScanInfo {
        this['failed_cluster_num'] = failedClusterNum;
        return this;
    }
    public set failedClusterNum(failedClusterNum: number  | undefined) {
        this['failed_cluster_num'] = failedClusterNum;
    }
    public get failedClusterNum(): number | undefined {
        return this['failed_cluster_num'];
    }
}