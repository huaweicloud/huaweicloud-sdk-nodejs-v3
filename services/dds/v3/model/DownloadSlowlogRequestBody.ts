

export class DownloadSlowlogRequestBody {
    private 'file_name_list'?: Array<string>;
    private 'node_id_list'?: Array<string>;
    public constructor() { 
    }
    public withFileNameList(fileNameList: Array<string>): DownloadSlowlogRequestBody {
        this['file_name_list'] = fileNameList;
        return this;
    }
    public set fileNameList(fileNameList: Array<string>  | undefined) {
        this['file_name_list'] = fileNameList;
    }
    public get fileNameList(): Array<string> | undefined {
        return this['file_name_list'];
    }
    public withNodeIdList(nodeIdList: Array<string>): DownloadSlowlogRequestBody {
        this['node_id_list'] = nodeIdList;
        return this;
    }
    public set nodeIdList(nodeIdList: Array<string>  | undefined) {
        this['node_id_list'] = nodeIdList;
    }
    public get nodeIdList(): Array<string> | undefined {
        return this['node_id_list'];
    }
}