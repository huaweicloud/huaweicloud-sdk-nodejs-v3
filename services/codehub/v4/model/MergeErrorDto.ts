

export class MergeErrorDto {
    private 'merge_user_name'?: string;
    private 'merge_start_time'?: string;
    private 'error_title'?: string;
    private 'http_code_status'?: string;
    private 'error_code'?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withMergeUserName(mergeUserName: string): MergeErrorDto {
        this['merge_user_name'] = mergeUserName;
        return this;
    }
    public set mergeUserName(mergeUserName: string  | undefined) {
        this['merge_user_name'] = mergeUserName;
    }
    public get mergeUserName(): string | undefined {
        return this['merge_user_name'];
    }
    public withMergeStartTime(mergeStartTime: string): MergeErrorDto {
        this['merge_start_time'] = mergeStartTime;
        return this;
    }
    public set mergeStartTime(mergeStartTime: string  | undefined) {
        this['merge_start_time'] = mergeStartTime;
    }
    public get mergeStartTime(): string | undefined {
        return this['merge_start_time'];
    }
    public withErrorTitle(errorTitle: string): MergeErrorDto {
        this['error_title'] = errorTitle;
        return this;
    }
    public set errorTitle(errorTitle: string  | undefined) {
        this['error_title'] = errorTitle;
    }
    public get errorTitle(): string | undefined {
        return this['error_title'];
    }
    public withHttpCodeStatus(httpCodeStatus: string): MergeErrorDto {
        this['http_code_status'] = httpCodeStatus;
        return this;
    }
    public set httpCodeStatus(httpCodeStatus: string  | undefined) {
        this['http_code_status'] = httpCodeStatus;
    }
    public get httpCodeStatus(): string | undefined {
        return this['http_code_status'];
    }
    public withErrorCode(errorCode: string): MergeErrorDto {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): MergeErrorDto {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}