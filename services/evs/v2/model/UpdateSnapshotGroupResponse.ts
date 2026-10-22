import { SnapshotGroupDetail } from './SnapshotGroupDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSnapshotGroupResponse extends SdkResponse {
    private 'snapshot_group'?: SnapshotGroupDetail;
    public constructor() { 
        super();
    }
    public withSnapshotGroup(snapshotGroup: SnapshotGroupDetail): UpdateSnapshotGroupResponse {
        this['snapshot_group'] = snapshotGroup;
        return this;
    }
    public set snapshotGroup(snapshotGroup: SnapshotGroupDetail  | undefined) {
        this['snapshot_group'] = snapshotGroup;
    }
    public get snapshotGroup(): SnapshotGroupDetail | undefined {
        return this['snapshot_group'];
    }
}