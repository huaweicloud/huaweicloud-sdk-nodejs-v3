import { ContainerBaseInfo } from './ContainerBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListContainersResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'last_update_time'?: number;
    private 'data_list'?: Array<ContainerBaseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListContainersResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withLastUpdateTime(lastUpdateTime: number): ListContainersResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withDataList(dataList: Array<ContainerBaseInfo>): ListContainersResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ContainerBaseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ContainerBaseInfo> | undefined {
        return this['data_list'];
    }
}