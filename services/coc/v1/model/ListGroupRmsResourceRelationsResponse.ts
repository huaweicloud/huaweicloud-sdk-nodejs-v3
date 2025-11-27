import { GroupRmsResourceRelationQueryResponseData } from './GroupRmsResourceRelationQueryResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupRmsResourceRelationsResponse extends SdkResponse {
    public data?: Array<GroupRmsResourceRelationQueryResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<GroupRmsResourceRelationQueryResponseData>): ListGroupRmsResourceRelationsResponse {
        this['data'] = data;
        return this;
    }
}