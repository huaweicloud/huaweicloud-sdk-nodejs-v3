import { IpGroupBody } from './IpGroupBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpGroupResponse extends SdkResponse {
    public cloudTotal?: number;
    public total?: number;
    public items?: Array<IpGroupBody>;
    public constructor() { 
        super();
    }
    public withCloudTotal(cloudTotal: number): ListIpGroupResponse {
        this['cloudTotal'] = cloudTotal;
        return this;
    }
    public withTotal(total: number): ListIpGroupResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<IpGroupBody>): ListIpGroupResponse {
        this['items'] = items;
        return this;
    }
}