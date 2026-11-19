import { AiOverviewDataList } from './AiOverviewDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAiOverviewStatisticsResponse extends SdkResponse {
    private 'data_list'?: Array<AiOverviewDataList>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<AiOverviewDataList>): ShowAiOverviewStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AiOverviewDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AiOverviewDataList> | undefined {
        return this['data_list'];
    }
}