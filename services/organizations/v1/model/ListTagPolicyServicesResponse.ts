import { TagPolicyServiceDto } from './TagPolicyServiceDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagPolicyServicesResponse extends SdkResponse {
    public services?: Array<TagPolicyServiceDto>;
    public constructor() { 
        super();
    }
    public withServices(services: Array<TagPolicyServiceDto>): ListTagPolicyServicesResponse {
        this['services'] = services;
        return this;
    }
}