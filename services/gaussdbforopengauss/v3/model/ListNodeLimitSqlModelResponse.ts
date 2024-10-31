import { ListNodeLimitSqlModelResponseResult } from './ListNodeLimitSqlModelResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNodeLimitSqlModelResponse extends SdkResponse {
    private 'node_limit_sql_model_list'?: Array<ListNodeLimitSqlModelResponseResult>;
    public limit?: number;
    public offset?: number;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withNodeLimitSqlModelList(nodeLimitSqlModelList: Array<ListNodeLimitSqlModelResponseResult>): ListNodeLimitSqlModelResponse {
        this['node_limit_sql_model_list'] = nodeLimitSqlModelList;
        return this;
    }
    public set nodeLimitSqlModelList(nodeLimitSqlModelList: Array<ListNodeLimitSqlModelResponseResult>  | undefined) {
        this['node_limit_sql_model_list'] = nodeLimitSqlModelList;
    }
    public get nodeLimitSqlModelList(): Array<ListNodeLimitSqlModelResponseResult> | undefined {
        return this['node_limit_sql_model_list'];
    }
    public withLimit(limit: number): ListNodeLimitSqlModelResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListNodeLimitSqlModelResponse {
        this['offset'] = offset;
        return this;
    }
    public withTotalCount(totalCount: number): ListNodeLimitSqlModelResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}