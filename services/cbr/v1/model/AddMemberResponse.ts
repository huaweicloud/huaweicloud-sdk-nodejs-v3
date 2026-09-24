import { Member } from './Member';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddMemberResponse extends SdkResponse {
    public members?: Array<Member>;
    public constructor() { 
        super();
    }
    public withMembers(members: Array<Member>): AddMemberResponse {
        this['members'] = members;
        return this;
    }
}