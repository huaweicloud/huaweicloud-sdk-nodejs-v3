import { AddAccountsRequestInfo } from './AddAccountsRequestInfo';


export class BatchAddAccountsRequestInfo {
    private 'data_list'?: Array<AddAccountsRequestInfo>;
    public constructor() { 
    }
    public withDataList(dataList: Array<AddAccountsRequestInfo>): BatchAddAccountsRequestInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AddAccountsRequestInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AddAccountsRequestInfo> | undefined {
        return this['data_list'];
    }
}