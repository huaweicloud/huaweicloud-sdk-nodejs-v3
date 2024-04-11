import { NodeContentCompareOverviewResult } from './NodeContentCompareOverviewResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListContentCompareOverviewResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'content_compare_result_infos'?: Array<NodeContentCompareOverviewResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListContentCompareOverviewResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withContentCompareResultInfos(contentCompareResultInfos: Array<NodeContentCompareOverviewResult>): ListContentCompareOverviewResponse {
        this['content_compare_result_infos'] = contentCompareResultInfos;
        return this;
    }
    public set contentCompareResultInfos(contentCompareResultInfos: Array<NodeContentCompareOverviewResult>  | undefined) {
        this['content_compare_result_infos'] = contentCompareResultInfos;
    }
    public get contentCompareResultInfos(): Array<NodeContentCompareOverviewResult> | undefined {
        return this['content_compare_result_infos'];
    }
}