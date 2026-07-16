import { ServiceEventResponse } from './ServiceEventResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferServiceEventsResponse extends SdkResponse {
    public current?: number;
    public pages?: number;
    public size?: number;
    public total?: number;
    public data?: Array<ServiceEventResponse>;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListInferServiceEventsResponse {
        this['current'] = current;
        return this;
    }
    public withPages(pages: number): ListInferServiceEventsResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListInferServiceEventsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListInferServiceEventsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<ServiceEventResponse>): ListInferServiceEventsResponse {
        this['data'] = data;
        return this;
    }
}