import { HyperinstanceGroupResponse } from './HyperinstanceGroupResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHyperinstanceGroupResponse extends SdkResponse {
    public current?: number;
    public pages?: number;
    public size?: number;
    public total?: number;
    public data?: Array<HyperinstanceGroupResponse>;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListHyperinstanceGroupResponse {
        this['current'] = current;
        return this;
    }
    public withPages(pages: number): ListHyperinstanceGroupResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListHyperinstanceGroupResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListHyperinstanceGroupResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<HyperinstanceGroupResponse>): ListHyperinstanceGroupResponse {
        this['data'] = data;
        return this;
    }
}