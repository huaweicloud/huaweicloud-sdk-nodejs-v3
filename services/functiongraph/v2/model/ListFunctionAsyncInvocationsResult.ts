

export class ListFunctionAsyncInvocationsResult {
    private 'request_id'?: string;
    public status?: ListFunctionAsyncInvocationsResultStatusEnum | string;
    private 'error_message'?: string;
    private 'error_code'?: number;
    private 'start_time'?: Date;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withRequestId(requestId: string): ListFunctionAsyncInvocationsResult {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withStatus(status: ListFunctionAsyncInvocationsResultStatusEnum | string): ListFunctionAsyncInvocationsResult {
        this['status'] = status;
        return this;
    }
    public withErrorMessage(errorMessage: string): ListFunctionAsyncInvocationsResult {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withErrorCode(errorCode: number): ListFunctionAsyncInvocationsResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: number  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): number | undefined {
        return this['error_code'];
    }
    public withStartTime(startTime: Date): ListFunctionAsyncInvocationsResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListFunctionAsyncInvocationsResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFunctionAsyncInvocationsResultStatusEnum {
    WAIT = 'WAIT',
    RUNNING = 'RUNNING',
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    DISCARD = 'DISCARD'
}
