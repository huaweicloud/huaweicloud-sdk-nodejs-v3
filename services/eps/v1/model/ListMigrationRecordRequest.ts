

export class ListMigrationRecordRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: string;
    public limit?: number;
    private 'resource_id'?: string;
    public constructor() { 
    }
    public withStartTime(startTime: string): ListMigrationRecordRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListMigrationRecordRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: string): ListMigrationRecordRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMigrationRecordRequest {
        this['limit'] = limit;
        return this;
    }
    public withResourceId(resourceId: string): ListMigrationRecordRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}