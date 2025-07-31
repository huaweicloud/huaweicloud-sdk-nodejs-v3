import { FileEventResponseInfo } from './FileEventResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFileEventsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<FileEventResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListFileEventsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<FileEventResponseInfo>): ListFileEventsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<FileEventResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<FileEventResponseInfo> | undefined {
        return this['data_list'];
    }
}