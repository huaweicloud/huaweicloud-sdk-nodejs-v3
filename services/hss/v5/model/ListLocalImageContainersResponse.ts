import { LocalImageContainerInfo } from './LocalImageContainerInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLocalImageContainersResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<LocalImageContainerInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListLocalImageContainersResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<LocalImageContainerInfo>): ListLocalImageContainersResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<LocalImageContainerInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<LocalImageContainerInfo> | undefined {
        return this['data_list'];
    }
}