import { ShowInstanceUsersEntity } from './ShowInstanceUsersEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceUsersResponse extends SdkResponse {
    public users?: Array<ShowInstanceUsersEntity>;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<ShowInstanceUsersEntity>): ShowInstanceUsersResponse {
        this['users'] = users;
        return this;
    }
}