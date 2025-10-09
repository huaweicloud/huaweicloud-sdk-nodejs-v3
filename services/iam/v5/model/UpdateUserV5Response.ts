import { User } from './User';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUserV5Response extends SdkResponse {
    public user?: User;
    public constructor() { 
        super();
    }
    public withUser(user: User): UpdateUserV5Response {
        this['user'] = user;
        return this;
    }
}