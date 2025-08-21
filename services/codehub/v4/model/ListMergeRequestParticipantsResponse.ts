import { UserBasicDto } from './UserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestParticipantsResponse extends SdkResponse {
    public body?: Array<UserBasicDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<UserBasicDto>): ListMergeRequestParticipantsResponse {
        this['body'] = body;
        return this;
    }
}