import { WdrSnapshotGroupResult } from './WdrSnapshotGroupResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWdrSnapshotAvailableGroupsResponse extends SdkResponse {
    private 'total_count'?: number;
    public groups?: Array<WdrSnapshotGroupResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListWdrSnapshotAvailableGroupsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withGroups(groups: Array<WdrSnapshotGroupResult>): ListWdrSnapshotAvailableGroupsResponse {
        this['groups'] = groups;
        return this;
    }
}