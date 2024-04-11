import { NodeContentCompareDetailResult } from './NodeContentCompareDetailResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListContentCompareDetailResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'content_compare_result_infos'?: Array<NodeContentCompareDetailResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListContentCompareDetailResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withContentCompareResultInfos(contentCompareResultInfos: Array<NodeContentCompareDetailResult>): ListContentCompareDetailResponse {
        this['content_compare_result_infos'] = contentCompareResultInfos;
        return this;
    }
    public set contentCompareResultInfos(contentCompareResultInfos: Array<NodeContentCompareDetailResult>  | undefined) {
        this['content_compare_result_infos'] = contentCompareResultInfos;
    }
    public get contentCompareResultInfos(): Array<NodeContentCompareDetailResult> | undefined {
        return this['content_compare_result_infos'];
    }
}