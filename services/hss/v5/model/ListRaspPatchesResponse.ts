import { RaspPatchInfo } from './RaspPatchInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRaspPatchesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<RaspPatchInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListRaspPatchesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<RaspPatchInfo>): ListRaspPatchesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<RaspPatchInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<RaspPatchInfo> | undefined {
        return this['data_list'];
    }
}