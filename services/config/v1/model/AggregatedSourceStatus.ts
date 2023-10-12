

export class AggregatedSourceStatus {
    private 'last_error_code'?: string;
    private 'last_error_message'?: string;
    private 'last_update_status'?: string;
    private 'last_update_time'?: string;
    private 'source_id'?: string;
    private 'source_name'?: string;
    private 'source_type'?: string;
    public constructor() { 
    }
    public withLastErrorCode(lastErrorCode: string): AggregatedSourceStatus {
        this['last_error_code'] = lastErrorCode;
        return this;
    }
    public set lastErrorCode(lastErrorCode: string  | undefined) {
        this['last_error_code'] = lastErrorCode;
    }
    public get lastErrorCode(): string | undefined {
        return this['last_error_code'];
    }
    public withLastErrorMessage(lastErrorMessage: string): AggregatedSourceStatus {
        this['last_error_message'] = lastErrorMessage;
        return this;
    }
    public set lastErrorMessage(lastErrorMessage: string  | undefined) {
        this['last_error_message'] = lastErrorMessage;
    }
    public get lastErrorMessage(): string | undefined {
        return this['last_error_message'];
    }
    public withLastUpdateStatus(lastUpdateStatus: string): AggregatedSourceStatus {
        this['last_update_status'] = lastUpdateStatus;
        return this;
    }
    public set lastUpdateStatus(lastUpdateStatus: string  | undefined) {
        this['last_update_status'] = lastUpdateStatus;
    }
    public get lastUpdateStatus(): string | undefined {
        return this['last_update_status'];
    }
    public withLastUpdateTime(lastUpdateTime: string): AggregatedSourceStatus {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): string | undefined {
        return this['last_update_time'];
    }
    public withSourceId(sourceId: string): AggregatedSourceStatus {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withSourceName(sourceName: string): AggregatedSourceStatus {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withSourceType(sourceType: string): AggregatedSourceStatus {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
}