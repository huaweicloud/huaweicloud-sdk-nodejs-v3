import { User } from './User';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUserV5Response extends SdkResponse {
    public user?: User;
    public constructor() { 
        super();
    }
    public withUser(user: User): CreateUserV5Response {
        this['user'] = user;
        return this;
    }
}