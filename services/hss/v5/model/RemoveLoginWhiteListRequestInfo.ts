import { LoginWhiteListRequestInfo } from './LoginWhiteListRequestInfo';


export class RemoveLoginWhiteListRequestInfo {
    private 'data_list'?: Array<LoginWhiteListRequestInfo>;
    private 'delete_all'?: boolean;
    public constructor() { 
    }
    public withDataList(dataList: Array<LoginWhiteListRequestInfo>): RemoveLoginWhiteListRequestInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<LoginWhiteListRequestInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<LoginWhiteListRequestInfo> | undefined {
        return this['data_list'];
    }
    public withDeleteAll(deleteAll: boolean): RemoveLoginWhiteListRequestInfo {
        this['delete_all'] = deleteAll;
        return this;
    }
    public set deleteAll(deleteAll: boolean  | undefined) {
        this['delete_all'] = deleteAll;
    }
    public get deleteAll(): boolean | undefined {
        return this['delete_all'];
    }
}