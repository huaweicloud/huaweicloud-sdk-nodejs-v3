

export class AggregatedSourceStatus {
    private 'last_error_code'?: string | undefined;
    private 'last_error_message'?: string | undefined;
    private 'last_update_status'?: string | undefined;
    private 'last_update_time'?: string | undefined;
    private 'source_id'?: string | undefined;
    private 'source_type'?: string | undefined;
    public constructor() { 
    }
    public withLastErrorCode(lastErrorCode: string): AggregatedSourceStatus {
        this['last_error_code'] = lastErrorCode;
        return this;
    }
    public set lastErrorCode(lastErrorCode: string | undefined) {
        this['last_error_code'] = lastErrorCode;
    }
    public get lastErrorCode() {
        return this['last_error_code'];
    }
    public withLastErrorMessage(lastErrorMessage: string): AggregatedSourceStatus {
        this['last_error_message'] = lastErrorMessage;
        return this;
    }
    public set lastErrorMessage(lastErrorMessage: string | undefined) {
        this['last_error_message'] = lastErrorMessage;
    }
    public get lastErrorMessage() {
        return this['last_error_message'];
    }
    public withLastUpdateStatus(lastUpdateStatus: string): AggregatedSourceStatus {
        this['last_update_status'] = lastUpdateStatus;
        return this;
    }
    public set lastUpdateStatus(lastUpdateStatus: string | undefined) {
        this['last_update_status'] = lastUpdateStatus;
    }
    public get lastUpdateStatus() {
        return this['last_update_status'];
    }
    public withLastUpdateTime(lastUpdateTime: string): AggregatedSourceStatus {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime() {
        return this['last_update_time'];
    }
    public withSourceId(sourceId: string): AggregatedSourceStatus {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId() {
        return this['source_id'];
    }
    public withSourceType(sourceType: string): AggregatedSourceStatus {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType() {
        return this['source_type'];
    }
}