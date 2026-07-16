import { ServiceItemResponseData } from './ServiceItemResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferServicesResponse extends SdkResponse {
    public data?: Array<ServiceItemResponseData>;
    public current?: number;
    public size?: number;
    public pages?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<ServiceItemResponseData>): ListInferServicesResponse {
        this['data'] = data;
        return this;
    }
    public withCurrent(current: number): ListInferServicesResponse {
        this['current'] = current;
        return this;
    }
    public withSize(size: number): ListInferServicesResponse {
        this['size'] = size;
        return this;
    }
    public withPages(pages: number): ListInferServicesResponse {
        this['pages'] = pages;
        return this;
    }
    public withTotal(total: number): ListInferServicesResponse {
        this['total'] = total;
        return this;
    }
}