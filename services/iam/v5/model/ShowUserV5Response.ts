import { UserEx } from './UserEx';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserV5Response extends SdkResponse {
    public user?: UserEx;
    public constructor() { 
        super();
    }
    public withUser(user: UserEx): ShowUserV5Response {
        this['user'] = user;
        return this;
    }
}