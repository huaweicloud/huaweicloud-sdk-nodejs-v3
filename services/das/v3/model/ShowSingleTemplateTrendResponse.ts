import { SingleSqlTplCmp } from './SingleSqlTplCmp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSingleTemplateTrendResponse extends SdkResponse {
    public timestamps?: Array<number>;
    private 'trend_data_list'?: Array<SingleSqlTplCmp>;
    public constructor() { 
        super();
    }
    public withTimestamps(timestamps: Array<number>): ShowSingleTemplateTrendResponse {
        this['timestamps'] = timestamps;
        return this;
    }
    public withTrendDataList(trendDataList: Array<SingleSqlTplCmp>): ShowSingleTemplateTrendResponse {
        this['trend_data_list'] = trendDataList;
        return this;
    }
    public set trendDataList(trendDataList: Array<SingleSqlTplCmp>  | undefined) {
        this['trend_data_list'] = trendDataList;
    }
    public get trendDataList(): Array<SingleSqlTplCmp> | undefined {
        return this['trend_data_list'];
    }
}