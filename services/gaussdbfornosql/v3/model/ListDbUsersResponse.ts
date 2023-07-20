import { RedisDbUserInfo } from './RedisDbUserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbUsersResponse extends SdkResponse {
    public users?: Array<RedisDbUserInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<RedisDbUserInfo>): ListDbUsersResponse {
        this['users'] = users;
        return this;
    }
    public withTotalCount(totalCount: number): ListDbUsersResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}