
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseUsersResponse extends SdkResponse {
    public users?: string;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: string): ListDatabaseUsersResponse {
        this['users'] = users;
        return this;
    }
    public withTotalCount(totalCount: number): ListDatabaseUsersResponse {
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