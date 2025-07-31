import { MultiCloudClusterIdInfo } from './MultiCloudClusterIdInfo';


export class MultiCloudClusterSyncStatusRequestBody {
    private 'total_num'?: number;
    private 'data_list'?: Array<MultiCloudClusterIdInfo>;
    public constructor() { 
    }
    public withTotalNum(totalNum: number): MultiCloudClusterSyncStatusRequestBody {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<MultiCloudClusterIdInfo>): MultiCloudClusterSyncStatusRequestBody {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<MultiCloudClusterIdInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<MultiCloudClusterIdInfo> | undefined {
        return this['data_list'];
    }
}