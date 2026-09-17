import { TopDataInfo } from './TopDataInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopDataResponse extends SdkResponse {
    private 'top_data_list'?: Array<TopDataInfo>;
    private 'total_count'?: number;
    private 'collect_timestamp'?: number;
    public constructor() { 
        super();
    }
    public withTopDataList(topDataList: Array<TopDataInfo>): ShowTopDataResponse {
        this['top_data_list'] = topDataList;
        return this;
    }
    public set topDataList(topDataList: Array<TopDataInfo>  | undefined) {
        this['top_data_list'] = topDataList;
    }
    public get topDataList(): Array<TopDataInfo> | undefined {
        return this['top_data_list'];
    }
    public withTotalCount(totalCount: number): ShowTopDataResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withCollectTimestamp(collectTimestamp: number): ShowTopDataResponse {
        this['collect_timestamp'] = collectTimestamp;
        return this;
    }
    public set collectTimestamp(collectTimestamp: number  | undefined) {
        this['collect_timestamp'] = collectTimestamp;
    }
    public get collectTimestamp(): number | undefined {
        return this['collect_timestamp'];
    }
}