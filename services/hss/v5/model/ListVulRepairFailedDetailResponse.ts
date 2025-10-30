import { VulRepairFailedDetailInfo } from './VulRepairFailedDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulRepairFailedDetailResponse extends SdkResponse {
    private 'data_list'?: Array<VulRepairFailedDetailInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<VulRepairFailedDetailInfo>): ListVulRepairFailedDetailResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulRepairFailedDetailInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulRepairFailedDetailInfo> | undefined {
        return this['data_list'];
    }
}