
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSystemConfigsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListSystemConfigsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<string>): ListSystemConfigsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<string>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<string> | undefined {
        return this['data_list'];
    }
}