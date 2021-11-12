import { ListUsersForEnterpriseProjectResUsers } from './ListUsersForEnterpriseProjectResUsers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersForEnterpriseProjectResponse extends SdkResponse {
    public users?: Array<ListUsersForEnterpriseProjectResUsers>;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<ListUsersForEnterpriseProjectResUsers>): ListUsersForEnterpriseProjectResponse {
        this['users'] = users;
        return this;
    }
}