import { BatchCreateRepositoryMemberDto } from './BatchCreateRepositoryMemberDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddRepositoryMembersResponse extends SdkResponse {
    public body?: Array<BatchCreateRepositoryMemberDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<BatchCreateRepositoryMemberDto>): AddRepositoryMembersResponse {
        this['body'] = body;
        return this;
    }
}