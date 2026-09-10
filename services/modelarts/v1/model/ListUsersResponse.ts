import { UserInfo } from './UserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersResponse extends SdkResponse {
    public users?: Array<UserInfo>;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<UserInfo>): ListUsersResponse {
        this['users'] = users;
        return this;
    }
}