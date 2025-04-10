import { SystemUserWhiteListRequestInfo } from './SystemUserWhiteListRequestInfo';


export class RemoveSystemUserWhiteListRequestInfo {
    private 'data_list'?: Array<SystemUserWhiteListRequestInfo>;
    private 'delete_all'?: boolean;
    public constructor() { 
    }
    public withDataList(dataList: Array<SystemUserWhiteListRequestInfo>): RemoveSystemUserWhiteListRequestInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<SystemUserWhiteListRequestInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<SystemUserWhiteListRequestInfo> | undefined {
        return this['data_list'];
    }
    public withDeleteAll(deleteAll: boolean): RemoveSystemUserWhiteListRequestInfo {
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