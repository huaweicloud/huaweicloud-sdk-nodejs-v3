import { ClientSpanInfo } from './ClientSpanInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSpanSearchResponse extends SdkResponse {
    public total?: number;
    private 'span_info_list'?: Array<ClientSpanInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowSpanSearchResponse {
        this['total'] = total;
        return this;
    }
    public withSpanInfoList(spanInfoList: Array<ClientSpanInfo>): ShowSpanSearchResponse {
        this['span_info_list'] = spanInfoList;
        return this;
    }
    public set spanInfoList(spanInfoList: Array<ClientSpanInfo>  | undefined) {
        this['span_info_list'] = spanInfoList;
    }
    public get spanInfoList(): Array<ClientSpanInfo> | undefined {
        return this['span_info_list'];
    }
}