import { KernelModuleStatisticsResponseInfo } from './KernelModuleStatisticsResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKernelModuleStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<KernelModuleStatisticsResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListKernelModuleStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<KernelModuleStatisticsResponseInfo>): ListKernelModuleStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<KernelModuleStatisticsResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<KernelModuleStatisticsResponseInfo> | undefined {
        return this['data_list'];
    }
}