import { GroupAliResourceRelationQueryResponseData } from './GroupAliResourceRelationQueryResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupAliResourceRelationsResponse extends SdkResponse {
    public data?: Array<GroupAliResourceRelationQueryResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<GroupAliResourceRelationQueryResponseData>): ListGroupAliResourceRelationsResponse {
        this['data'] = data;
        return this;
    }
}