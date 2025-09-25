import { Dictionary } from './Dictionary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDictionariesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<Dictionary>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListDictionariesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<Dictionary>): ListDictionariesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<Dictionary>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<Dictionary> | undefined {
        return this['data_list'];
    }
}