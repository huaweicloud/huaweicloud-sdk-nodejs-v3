import { EventAttCkDetailResponseInfo } from './EventAttCkDetailResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventAttCkResponse extends SdkResponse {
    private 'data_list'?: Array<EventAttCkDetailResponseInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<EventAttCkDetailResponseInfo>): ListEventAttCkResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<EventAttCkDetailResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<EventAttCkDetailResponseInfo> | undefined {
        return this['data_list'];
    }
}