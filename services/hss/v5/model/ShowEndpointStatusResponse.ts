import { HostStatusInfo } from './HostStatusInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEndpointStatusResponse extends SdkResponse {
    private 'data_list'?: Array<HostStatusInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<HostStatusInfo>): ShowEndpointStatusResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HostStatusInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HostStatusInfo> | undefined {
        return this['data_list'];
    }
}