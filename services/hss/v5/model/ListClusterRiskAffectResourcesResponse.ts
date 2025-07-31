import { ListClusterRiskAffectResourcesResponseInfoDataList } from './ListClusterRiskAffectResourcesResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterRiskAffectResourcesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ListClusterRiskAffectResourcesResponseInfoDataList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListClusterRiskAffectResourcesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ListClusterRiskAffectResourcesResponseInfoDataList>): ListClusterRiskAffectResourcesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ListClusterRiskAffectResourcesResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ListClusterRiskAffectResourcesResponseInfoDataList> | undefined {
        return this['data_list'];
    }
}