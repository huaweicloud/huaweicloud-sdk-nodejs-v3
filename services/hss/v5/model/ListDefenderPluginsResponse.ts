import { ListDefenderPluginsResponseBodyData } from './ListDefenderPluginsResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDefenderPluginsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ListDefenderPluginsResponseBodyData>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListDefenderPluginsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ListDefenderPluginsResponseBodyData>): ListDefenderPluginsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ListDefenderPluginsResponseBodyData>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ListDefenderPluginsResponseBodyData> | undefined {
        return this['data_list'];
    }
}