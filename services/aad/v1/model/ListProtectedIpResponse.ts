import { ProtectedIpResponse } from './ProtectedIpResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProtectedIpResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ProtectedIpResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListProtectedIpResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ProtectedIpResponse>): ListProtectedIpResponse {
        this['items'] = items;
        return this;
    }
}