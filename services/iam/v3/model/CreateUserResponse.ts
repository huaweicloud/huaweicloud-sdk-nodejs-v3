import { CreateUserResult } from './CreateUserResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUserResponse extends SdkResponse {
    public user?: CreateUserResult;
    public constructor() { 
        super();
    }
    public withUser(user: CreateUserResult): CreateUserResponse {
        this['user'] = user;
        return this;
    }
}