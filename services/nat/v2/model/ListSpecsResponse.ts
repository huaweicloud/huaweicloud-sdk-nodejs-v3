import { Spec } from './Spec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSpecsResponse extends SdkResponse {
    public specs?: Array<Spec>;
    public constructor() { 
        super();
    }
    public withSpecs(specs: Array<Spec>): ListSpecsResponse {
        this['specs'] = specs;
        return this;
    }
}