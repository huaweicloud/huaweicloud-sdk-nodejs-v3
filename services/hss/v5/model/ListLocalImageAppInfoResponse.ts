import { LocalImageAppList } from './LocalImageAppList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLocalImageAppInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<LocalImageAppList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListLocalImageAppInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<LocalImageAppList>): ListLocalImageAppInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<LocalImageAppList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<LocalImageAppList> | undefined {
        return this['data_list'];
    }
}