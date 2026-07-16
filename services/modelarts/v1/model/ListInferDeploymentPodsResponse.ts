import { ServicePodResponse } from './ServicePodResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferDeploymentPodsResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ServicePodResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListInferDeploymentPodsResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ServicePodResponse>): ListInferDeploymentPodsResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListInferDeploymentPodsResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListInferDeploymentPodsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListInferDeploymentPodsResponse {
        this['total'] = total;
        return this;
    }
}