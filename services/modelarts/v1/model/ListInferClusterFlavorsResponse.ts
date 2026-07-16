import { InferFlavor } from './InferFlavor';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferClusterFlavorsResponse extends SdkResponse {
    public current?: number;
    public data?: Array<InferFlavor>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListInferClusterFlavorsResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<InferFlavor>): ListInferClusterFlavorsResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListInferClusterFlavorsResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListInferClusterFlavorsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListInferClusterFlavorsResponse {
        this['total'] = total;
        return this;
    }
}