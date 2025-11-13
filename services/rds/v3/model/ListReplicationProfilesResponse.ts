import { ListReplicationProfilesResult } from './ListReplicationProfilesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReplicationProfilesResponse extends SdkResponse {
    public profiles?: Array<ListReplicationProfilesResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withProfiles(profiles: Array<ListReplicationProfilesResult>): ListReplicationProfilesResponse {
        this['profiles'] = profiles;
        return this;
    }
    public withTotalCount(totalCount: number): ListReplicationProfilesResponse {
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