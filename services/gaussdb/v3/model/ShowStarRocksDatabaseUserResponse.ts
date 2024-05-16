import { ShowStarRocksDatabaseUsersUserDetails } from './ShowStarRocksDatabaseUsersUserDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStarRocksDatabaseUserResponse extends SdkResponse {
    private 'user_details'?: Array<ShowStarRocksDatabaseUsersUserDetails>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withUserDetails(userDetails: Array<ShowStarRocksDatabaseUsersUserDetails>): ShowStarRocksDatabaseUserResponse {
        this['user_details'] = userDetails;
        return this;
    }
    public set userDetails(userDetails: Array<ShowStarRocksDatabaseUsersUserDetails>  | undefined) {
        this['user_details'] = userDetails;
    }
    public get userDetails(): Array<ShowStarRocksDatabaseUsersUserDetails> | undefined {
        return this['user_details'];
    }
    public withTotalCount(totalCount: number): ShowStarRocksDatabaseUserResponse {
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