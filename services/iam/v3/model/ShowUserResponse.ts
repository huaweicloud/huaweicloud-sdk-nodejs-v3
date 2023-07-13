import { ShowUserResult } from './ShowUserResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserResponse extends SdkResponse {
    public user?: ShowUserResult;
    public constructor() { 
        super();
    }
    public withUser(user: ShowUserResult): ShowUserResponse {
        this['user'] = user;
        return this;
    }
}