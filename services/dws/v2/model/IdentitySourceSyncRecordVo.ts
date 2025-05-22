

export class IdentitySourceSyncRecordVo {
    public id?: string;
    private 'identity_source_id'?: string;
    private 'identity_source_type'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'add_count'?: number;
    private 'update_count'?: number;
    private 'delete_count'?: number;
    private 'failed_count'?: number;
    public status?: string;
    private 'fail_reason'?: string;
    public constructor() { 
    }
    public withId(id: string): IdentitySourceSyncRecordVo {
        this['id'] = id;
        return this;
    }
    public withIdentitySourceId(identitySourceId: string): IdentitySourceSyncRecordVo {
        this['identity_source_id'] = identitySourceId;
        return this;
    }
    public set identitySourceId(identitySourceId: string  | undefined) {
        this['identity_source_id'] = identitySourceId;
    }
    public get identitySourceId(): string | undefined {
        return this['identity_source_id'];
    }
    public withIdentitySourceType(identitySourceType: string): IdentitySourceSyncRecordVo {
        this['identity_source_type'] = identitySourceType;
        return this;
    }
    public set identitySourceType(identitySourceType: string  | undefined) {
        this['identity_source_type'] = identitySourceType;
    }
    public get identitySourceType(): string | undefined {
        return this['identity_source_type'];
    }
    public withStartTime(startTime: number): IdentitySourceSyncRecordVo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): IdentitySourceSyncRecordVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withAddCount(addCount: number): IdentitySourceSyncRecordVo {
        this['add_count'] = addCount;
        return this;
    }
    public set addCount(addCount: number  | undefined) {
        this['add_count'] = addCount;
    }
    public get addCount(): number | undefined {
        return this['add_count'];
    }
    public withUpdateCount(updateCount: number): IdentitySourceSyncRecordVo {
        this['update_count'] = updateCount;
        return this;
    }
    public set updateCount(updateCount: number  | undefined) {
        this['update_count'] = updateCount;
    }
    public get updateCount(): number | undefined {
        return this['update_count'];
    }
    public withDeleteCount(deleteCount: number): IdentitySourceSyncRecordVo {
        this['delete_count'] = deleteCount;
        return this;
    }
    public set deleteCount(deleteCount: number  | undefined) {
        this['delete_count'] = deleteCount;
    }
    public get deleteCount(): number | undefined {
        return this['delete_count'];
    }
    public withFailedCount(failedCount: number): IdentitySourceSyncRecordVo {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withStatus(status: string): IdentitySourceSyncRecordVo {
        this['status'] = status;
        return this;
    }
    public withFailReason(failReason: string): IdentitySourceSyncRecordVo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}