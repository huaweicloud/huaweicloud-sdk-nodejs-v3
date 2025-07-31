import { UpdateDaemonsetInfo } from './UpdateDaemonsetInfo';


export class BatchUpdateDaemonsetRequestBody {
    private 'data_list'?: Array<UpdateDaemonsetInfo>;
    public constructor(dataList?: Array<UpdateDaemonsetInfo>) { 
        this['data_list'] = dataList;
    }
    public withDataList(dataList: Array<UpdateDaemonsetInfo>): BatchUpdateDaemonsetRequestBody {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<UpdateDaemonsetInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<UpdateDaemonsetInfo> | undefined {
        return this['data_list'];
    }
}