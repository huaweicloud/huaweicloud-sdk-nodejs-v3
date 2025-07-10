import { FailureForBatchCreateGroupMembersDto } from './FailureForBatchCreateGroupMembersDto';
import { MemberBaseDto } from './MemberBaseDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateGroupUserGroupResponse extends SdkResponse {
    public success?: Array<MemberBaseDto>;
    public failure?: Array<FailureForBatchCreateGroupMembersDto>;
    public constructor() { 
        super();
    }
    public withSuccess(success: Array<MemberBaseDto>): AssociateGroupUserGroupResponse {
        this['success'] = success;
        return this;
    }
    public withFailure(failure: Array<FailureForBatchCreateGroupMembersDto>): AssociateGroupUserGroupResponse {
        this['failure'] = failure;
        return this;
    }
}