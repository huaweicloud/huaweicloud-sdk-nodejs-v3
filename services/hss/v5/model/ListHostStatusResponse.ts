import { Host } from './Host';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostStatusResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<Host>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListHostStatusResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<Host>): ListHostStatusResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<Host>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<Host> | undefined {
        return this['data_list'];
    }
}