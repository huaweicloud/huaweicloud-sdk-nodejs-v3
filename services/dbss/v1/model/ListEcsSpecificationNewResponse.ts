import { EcsSpecificationBean } from './EcsSpecificationBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEcsSpecificationNewResponse extends SdkResponse {
    public specification?: Array<EcsSpecificationBean>;
    public constructor() { 
        super();
    }
    public withSpecification(specification: Array<EcsSpecificationBean>): ListEcsSpecificationNewResponse {
        this['specification'] = specification;
        return this;
    }
}