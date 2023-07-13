import { UserDTO } from './UserDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchShowUserDetailsResponse extends SdkResponse {
    public body?: Array<UserDTO>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<UserDTO>): BatchShowUserDetailsResponse {
        this['body'] = body;
        return this;
    }
}