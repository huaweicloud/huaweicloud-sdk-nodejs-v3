import { UserForList } from './UserForList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlserverDbUsersResponse extends SdkResponse {
    public users?: Array<UserForList>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<UserForList>): ListSqlserverDbUsersResponse {
        this['users'] = users;
        return this;
    }
    public withTotalCount(totalCount: number): ListSqlserverDbUsersResponse {
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