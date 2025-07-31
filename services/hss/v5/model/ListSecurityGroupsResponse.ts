import { SecurityGroup } from './SecurityGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityGroupsResponse extends SdkResponse {
    public body?: Array<SecurityGroup>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SecurityGroup>): ListSecurityGroupsResponse {
        this['body'] = body;
        return this;
    }
}