
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopySnapshotResponse extends SdkResponse {
    private 'snapshot_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withSnapshotId(snapshotId: string): CopySnapshotResponse {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId() {
        return this['snapshot_id'];
    }
}