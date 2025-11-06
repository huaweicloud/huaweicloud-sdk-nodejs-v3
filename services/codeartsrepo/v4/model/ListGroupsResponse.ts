import { GroupBaseDto } from './GroupBaseDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupsResponse extends SdkResponse {
    public body?: Array<GroupBaseDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<GroupBaseDto>): ListGroupsResponse {
        this['body'] = body;
        return this;
    }
}