

export class ListFunctionAsyncInvocationsResult {
    private 'request_id'?: string | undefined;
    public status?: ListFunctionAsyncInvocationsResultStatusEnum;
    private 'error_message'?: string | undefined;
    private 'start_time'?: Date | undefined;
    private 'end_time'?: Date | undefined;
    public constructor() { 
    }
    public withRequestId(requestId: string): ListFunctionAsyncInvocationsResult {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withStatus(status: ListFunctionAsyncInvocationsResultStatusEnum): ListFunctionAsyncInvocationsResult {
        this['status'] = status;
        return this;
    }
    public withErrorMessage(errorMessage: string): ListFunctionAsyncInvocationsResult {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
    public withStartTime(startTime: Date): ListFunctionAsyncInvocationsResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ListFunctionAsyncInvocationsResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
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
