import { UserResp } from './UserResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserResponse extends SdkResponse {
    public users?: Array<UserResp>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<UserResp>): ListUserResponse {
        this['users'] = users;
        return this;
    }
    public withTotal(total: number): ListUserResponse {
        this['total'] = total;
        return this;
    }
}