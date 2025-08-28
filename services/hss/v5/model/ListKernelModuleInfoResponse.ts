import { KernelModuleInfo } from './KernelModuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKernelModuleInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<KernelModuleInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListKernelModuleInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<KernelModuleInfo>): ListKernelModuleInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<KernelModuleInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<KernelModuleInfo> | undefined {
        return this['data_list'];
    }
}