import { ShowClickHouseDatabaseUsersUserDetails } from './ShowClickHouseDatabaseUsersUserDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClickHouseDatabaseUserResponse extends SdkResponse {
    private 'user_details'?: Array<ShowClickHouseDatabaseUsersUserDetails>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withUserDetails(userDetails: Array<ShowClickHouseDatabaseUsersUserDetails>): ShowClickHouseDatabaseUserResponse {
        this['user_details'] = userDetails;
        return this;
    }
    public set userDetails(userDetails: Array<ShowClickHouseDatabaseUsersUserDetails>  | undefined) {
        this['user_details'] = userDetails;
    }
    public get userDetails(): Array<ShowClickHouseDatabaseUsersUserDetails> | undefined {
        return this['user_details'];
    }
    public withTotalCount(totalCount: number): ShowClickHouseDatabaseUserResponse {
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