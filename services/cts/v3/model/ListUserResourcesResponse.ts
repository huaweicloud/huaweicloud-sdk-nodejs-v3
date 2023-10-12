import { UserResource } from './UserResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserResourcesResponse extends SdkResponse {
    public users?: Array<UserResource>;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<UserResource>): ListUserResourcesResponse {
        this['users'] = users;
        return this;
    }
}