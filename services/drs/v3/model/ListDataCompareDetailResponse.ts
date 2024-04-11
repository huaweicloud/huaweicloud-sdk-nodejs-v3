import { TableLineCompareResultInfo } from './TableLineCompareResultInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataCompareDetailResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'table_line_compare_result_infos'?: Array<TableLineCompareResultInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListDataCompareDetailResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTableLineCompareResultInfos(tableLineCompareResultInfos: Array<TableLineCompareResultInfo>): ListDataCompareDetailResponse {
        this['table_line_compare_result_infos'] = tableLineCompareResultInfos;
        return this;
    }
    public set tableLineCompareResultInfos(tableLineCompareResultInfos: Array<TableLineCompareResultInfo>  | undefined) {
        this['table_line_compare_result_infos'] = tableLineCompareResultInfos;
    }
    public get tableLineCompareResultInfos(): Array<TableLineCompareResultInfo> | undefined {
        return this['table_line_compare_result_infos'];
    }
}