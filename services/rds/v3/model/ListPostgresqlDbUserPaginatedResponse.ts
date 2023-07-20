import { PostgresqlUserForList } from './PostgresqlUserForList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPostgresqlDbUserPaginatedResponse extends SdkResponse {
    public users?: Array<PostgresqlUserForList>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<PostgresqlUserForList>): ListPostgresqlDbUserPaginatedResponse {
        this['users'] = users;
        return this;
    }
    public withTotalCount(totalCount: number): ListPostgresqlDbUserPaginatedResponse {
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