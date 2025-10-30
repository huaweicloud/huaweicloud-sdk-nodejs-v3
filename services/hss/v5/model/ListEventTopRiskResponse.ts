import { EventTopRiskResponseInfo } from './EventTopRiskResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventTopRiskResponse extends SdkResponse {
    private 'data_list'?: Array<EventTopRiskResponseInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<EventTopRiskResponseInfo>): ListEventTopRiskResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<EventTopRiskResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<EventTopRiskResponseInfo> | undefined {
        return this['data_list'];
    }
}