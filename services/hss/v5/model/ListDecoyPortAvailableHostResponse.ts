import { AvailableHostListDataList } from './AvailableHostListDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDecoyPortAvailableHostResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AvailableHostListDataList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListDecoyPortAvailableHostResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AvailableHostListDataList>): ListDecoyPortAvailableHostResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AvailableHostListDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AvailableHostListDataList> | undefined {
        return this['data_list'];
    }
}