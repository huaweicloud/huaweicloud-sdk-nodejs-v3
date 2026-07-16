import { HpaEventResponse } from './HpaEventResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferDeploymentHpaEventsResponse extends SdkResponse {
    public current?: number;
    public pages?: number;
    public size?: number;
    public total?: number;
    public data?: Array<HpaEventResponse>;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListInferDeploymentHpaEventsResponse {
        this['current'] = current;
        return this;
    }
    public withPages(pages: number): ListInferDeploymentHpaEventsResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListInferDeploymentHpaEventsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListInferDeploymentHpaEventsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<HpaEventResponse>): ListInferDeploymentHpaEventsResponse {
        this['data'] = data;
        return this;
    }
}