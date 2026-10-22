
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSnapshotGroupResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'snapshot_group_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateSnapshotGroupResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withSnapshotGroupId(snapshotGroupId: string): CreateSnapshotGroupResponse {
        this['snapshot_group_id'] = snapshotGroupId;
        return this;
    }
    public set snapshotGroupId(snapshotGroupId: string  | undefined) {
        this['snapshot_group_id'] = snapshotGroupId;
    }
    public get snapshotGroupId(): string | undefined {
        return this['snapshot_group_id'];
    }
}