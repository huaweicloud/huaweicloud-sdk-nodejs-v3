

export class ListTasksRequestBodyClusterScanInfo {
    private 'scan_type_list'?: Array<string>;
    public constructor() { 
    }
    public withScanTypeList(scanTypeList: Array<string>): ListTasksRequestBodyClusterScanInfo {
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