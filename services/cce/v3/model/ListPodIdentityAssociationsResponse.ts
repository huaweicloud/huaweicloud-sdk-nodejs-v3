import { PodIdentityAssociationResp } from './PodIdentityAssociationResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPodIdentityAssociationsResponse extends SdkResponse {
    public body?: Array<PodIdentityAssociationResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PodIdentityAssociationResp>): ListPodIdentityAssociationsResponse {
        this['body'] = body;
        return this;
    }
}