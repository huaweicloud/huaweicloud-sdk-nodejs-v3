
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateStandardSnapshotResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'snapshot_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateStandardSnapshotResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withSnapshotId(snapshotId: string): CreateStandardSnapshotResponse {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
}