import { UserVO } from './UserVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectUsersResponse extends SdkResponse {
    public message?: string;
    public result?: Array<UserVO>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): ListProjectUsersResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: Array<UserVO>): ListProjectUsersResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListProjectUsersResponse {
        this['status'] = status;
        return this;
    }
}