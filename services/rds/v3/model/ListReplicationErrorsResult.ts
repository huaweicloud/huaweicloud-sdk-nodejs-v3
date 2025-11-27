

export class ListReplicationErrorsResult {
    private 'occur_time'?: string;
    private 'source_type_id'?: string;
    private 'source_name'?: string;
    private 'error_code'?: string;
    private 'error_text'?: string;
    public constructor() { 
    }
    public withOccurTime(occurTime: string): ListReplicationErrorsResult {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: string  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): string | undefined {
        return this['occur_time'];
    }
    public withSourceTypeId(sourceTypeId: string): ListReplicationErrorsResult {
        this['source_type_id'] = sourceTypeId;
        return this;
    }
    public set sourceTypeId(sourceTypeId: string  | undefined) {
        this['source_type_id'] = sourceTypeId;
    }
    public get sourceTypeId(): string | undefined {
        return this['source_type_id'];
    }
    public withSourceName(sourceName: string): ListReplicationErrorsResult {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withErrorCode(errorCode: string): ListReplicationErrorsResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorText(errorText: string): ListReplicationErrorsResult {
        this['error_text'] = errorText;
        return this;
    }
    public set errorText(errorText: string  | undefined) {
        this['error_text'] = errorText;
    }
    public get errorText(): string | undefined {
        return this['error_text'];
    }
}