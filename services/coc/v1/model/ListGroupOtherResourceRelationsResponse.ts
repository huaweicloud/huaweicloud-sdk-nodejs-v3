import { GroupOtherResourceRelationQueryResponseData } from './GroupOtherResourceRelationQueryResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupOtherResourceRelationsResponse extends SdkResponse {
    public data?: Array<GroupOtherResourceRelationQueryResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<GroupOtherResourceRelationQueryResponseData>): ListGroupOtherResourceRelationsResponse {
        this['data'] = data;
        return this;
    }
}