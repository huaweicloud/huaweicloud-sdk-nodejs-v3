import { EcsSpecificationBean } from './EcsSpecificationBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEcsSpecificationResponse extends SdkResponse {
    public specification?: Array<EcsSpecificationBean>;
    public constructor() { 
        super();
    }
    public withSpecification(specification: Array<EcsSpecificationBean>): ListEcsSpecificationResponse {
        this['specification'] = specification;
        return this;
    }
}