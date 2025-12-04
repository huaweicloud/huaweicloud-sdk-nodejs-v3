import { ListImageMembersView } from './ListImageMembersView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageMembersResponse extends SdkResponse {
    public members?: Array<ListImageMembersView>;
    public constructor() { 
        super();
    }
    public withMembers(members: Array<ListImageMembersView>): ListImageMembersResponse {
        this['members'] = members;
        return this;
    }
}