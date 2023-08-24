import { ResourceQuotasInfo } from './ResourceQuotasInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceQuotasResponse extends SdkResponse {
    private 'data_list'?: Array<ResourceQuotasInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<ResourceQuotasInfo>): ShowResourceQuotasResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ResourceQuotasInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ResourceQuotasInfo> | undefined {
        return this['data_list'];
    }
}