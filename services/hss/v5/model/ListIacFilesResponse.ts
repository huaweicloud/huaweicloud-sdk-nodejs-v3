import { ListIacFilesResponseInfoDataList } from './ListIacFilesResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIacFilesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ListIacFilesResponseInfoDataList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListIacFilesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ListIacFilesResponseInfoDataList>): ListIacFilesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ListIacFilesResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ListIacFilesResponseInfoDataList> | undefined {
        return this['data_list'];
    }
}