import { PrivateImageRepositoryInfo } from './PrivateImageRepositoryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSwrImageRepositoryResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PrivateImageRepositoryInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListSwrImageRepositoryResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PrivateImageRepositoryInfo>): ListSwrImageRepositoryResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PrivateImageRepositoryInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PrivateImageRepositoryInfo> | undefined {
        return this['data_list'];
    }
}