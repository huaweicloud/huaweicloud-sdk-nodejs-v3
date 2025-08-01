import { DaemonSetInfo } from './DaemonSetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListK8sDaemonSetsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<DaemonSetInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListK8sDaemonSetsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<DaemonSetInfo>): ListK8sDaemonSetsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<DaemonSetInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<DaemonSetInfo> | undefined {
        return this['data_list'];
    }
}