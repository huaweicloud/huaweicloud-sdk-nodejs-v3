import { MemberListV4Members } from './MemberListV4Members';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectMembersV4Response extends SdkResponse {
    public members?: Array<MemberListV4Members>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withMembers(members: Array<MemberListV4Members>): ListProjectMembersV4Response {
        this['members'] = members;
        return this;
    }
    public withTotal(total: number): ListProjectMembersV4Response {
        this['total'] = total;
        return this;
    }
}