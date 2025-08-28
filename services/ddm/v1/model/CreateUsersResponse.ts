import { CreateUsersDetailResponses } from './CreateUsersDetailResponses';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUsersResponse extends SdkResponse {
    public users?: Array<CreateUsersDetailResponses>;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<CreateUsersDetailResponses>): CreateUsersResponse {
        this['users'] = users;
        return this;
    }
}