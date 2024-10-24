import { AgentInfoResult } from './AgentInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgentInfosResponse extends SdkResponse {
    public page?: number;
    private 'page_size'?: number;
    private 'total_count'?: number;
    private 'data_list'?: Array<AgentInfoResult>;
    public constructor() { 
        super();
    }
    public withPage(page: number): ShowAgentInfosResponse {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): ShowAgentInfosResponse {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withTotalCount(totalCount: number): ShowAgentInfosResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withDataList(dataList: Array<AgentInfoResult>): ShowAgentInfosResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AgentInfoResult>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AgentInfoResult> | undefined {
        return this['data_list'];
    }
}