

export class FailureDetail {
    private 'snapshot_id'?: string;
    private 'snapshot_title'?: string;
    private 'failure_reason'?: string;
    private 'error_code'?: string;
    public constructor() { 
    }
    public withSnapshotId(snapshotId: string): FailureDetail {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withSnapshotTitle(snapshotTitle: string): FailureDetail {
        this['snapshot_title'] = snapshotTitle;
        return this;
    }
    public set snapshotTitle(snapshotTitle: string  | undefined) {
        this['snapshot_title'] = snapshotTitle;
    }
    public get snapshotTitle(): string | undefined {
        return this['snapshot_title'];
    }
    public withFailureReason(failureReason: string): FailureDetail {
        this['failure_reason'] = failureReason;
        return this;
    }
    public set failureReason(failureReason: string  | undefined) {
        this['failure_reason'] = failureReason;
    }
    public get failureReason(): string | undefined {
        return this['failure_reason'];
    }
    public withErrorCode(errorCode: string): FailureDetail {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}