import { AMQPUser } from './AMQPUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserResponse extends SdkResponse {
    public users?: Array<AMQPUser>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<AMQPUser>): ListUserResponse {
        this['users'] = users;
        return this;
    }
    public withTotal(total: number): ListUserResponse {
        this['total'] = total;
        return this;
    }
}