import { ServiceStatusItem } from './ServiceStatusItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateServiceOpensResponse extends SdkResponse {
    private 'service_list'?: Array<ServiceStatusItem>;
    public constructor() { 
        super();
    }
    public withServiceList(serviceList: Array<ServiceStatusItem>): BatchCreateServiceOpensResponse {
        this['service_list'] = serviceList;
        return this;
    }
    public set serviceList(serviceList: Array<ServiceStatusItem>  | undefined) {
        this['service_list'] = serviceList;
    }
    public get serviceList(): Array<ServiceStatusItem> | undefined {
        return this['service_list'];
    }
}