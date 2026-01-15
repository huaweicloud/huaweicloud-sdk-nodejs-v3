import { EcsSpecificationBean } from './EcsSpecificationBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEcsSpecificationNewResponse extends SdkResponse {
    public specifications?: Array<EcsSpecificationBean>;
    public constructor() { 
        super();
    }
    public withSpecifications(specifications: Array<EcsSpecificationBean>): ListEcsSpecificationNewResponse {
        this['specifications'] = specifications;
        return this;
    }
}