

export class FailedObjectRecordDto {
    public result?: boolean;
    private 'list_file_key'?: string;
    private 'error_code'?: string;
    public constructor() { 
    }
    public withResult(result: boolean): FailedObjectRecordDto {
        this['result'] = result;
        return this;
    }
    public withListFileKey(listFileKey: string): FailedObjectRecordDto {
        this['list_file_key'] = listFileKey;
        return this;
    }
    public set listFileKey(listFileKey: string  | undefined) {
        this['list_file_key'] = listFileKey;
    }
    public get listFileKey(): string | undefined {
        return this['list_file_key'];
    }
    public withErrorCode(errorCode: string): FailedObjectRecordDto {
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