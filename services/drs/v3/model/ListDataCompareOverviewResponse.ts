import { DataCompareOverviewInfo } from './DataCompareOverviewInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataCompareOverviewResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'data_compare_overview_infos'?: Array<DataCompareOverviewInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListDataCompareOverviewResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withDataCompareOverviewInfos(dataCompareOverviewInfos: Array<DataCompareOverviewInfo>): ListDataCompareOverviewResponse {
        this['data_compare_overview_infos'] = dataCompareOverviewInfos;
        return this;
    }
    public set dataCompareOverviewInfos(dataCompareOverviewInfos: Array<DataCompareOverviewInfo>  | undefined) {
        this['data_compare_overview_infos'] = dataCompareOverviewInfos;
    }
    public get dataCompareOverviewInfos(): Array<DataCompareOverviewInfo> | undefined {
        return this['data_compare_overview_infos'];
    }
}