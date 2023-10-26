import { IsolatedFileRequestInfo } from './IsolatedFileRequestInfo';


export class ChangeIsolatedFileRequestInfo {
    private 'data_list'?: Array<IsolatedFileRequestInfo>;
    public constructor() { 
    }
    public withDataList(dataList: Array<IsolatedFileRequestInfo>): ChangeIsolatedFileRequestInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<IsolatedFileRequestInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<IsolatedFileRequestInfo> | undefined {
        return this['data_list'];
    }
}