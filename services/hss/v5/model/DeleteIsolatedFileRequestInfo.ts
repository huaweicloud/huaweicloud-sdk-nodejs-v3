import { DelIsolatedFileRequestInfo } from './DelIsolatedFileRequestInfo';


export class DeleteIsolatedFileRequestInfo {
    private 'data_list'?: Array<DelIsolatedFileRequestInfo>;
    public constructor(dataList?: Array<DelIsolatedFileRequestInfo>) { 
        this['data_list'] = dataList;
    }
    public withDataList(dataList: Array<DelIsolatedFileRequestInfo>): DeleteIsolatedFileRequestInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<DelIsolatedFileRequestInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<DelIsolatedFileRequestInfo> | undefined {
        return this['data_list'];
    }
}