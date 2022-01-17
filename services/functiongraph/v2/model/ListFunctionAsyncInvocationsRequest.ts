

export class ListFunctionAsyncInvocationsRequest {
    private 'function_urn': string | undefined;
    private 'request_id'?: string | undefined;
    public limit?: string;
    public status?: ListFunctionAsyncInvocationsRequestStatusEnum;
    private 'query_begin_time'?: Date | undefined;
    private 'query_end_time'?: Date | undefined;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): ListFunctionAsyncInvocationsRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withRequestId(requestId: string): ListFunctionAsyncInvocationsRequest {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withLimit(limit: string): ListFunctionAsyncInvocationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: ListFunctionAsyncInvocationsRequestStatusEnum): ListFunctionAsyncInvocationsRequest {
        this['status'] = status;
        return this;
    }
    public withQueryBeginTime(queryBeginTime: Date): ListFunctionAsyncInvocationsRequest {
        this['query_begin_time'] = queryBeginTime;
        return this;
    }
    public set queryBeginTime(queryBeginTime: Date | undefined) {
        this['query_begin_time'] = queryBeginTime;
    }
    public get queryBeginTime() {
        return this['query_begin_time'];
    }
    public withQueryEndTime(queryEndTime: Date): ListFunctionAsyncInvocationsRequest {
        this['query_end_time'] = queryEndTime;
        return this;
    }
    public set queryEndTime(queryEndTime: Date | undefined) {
        this['query_end_time'] = queryEndTime;
    }
    public get queryEndTime() {
        return this['query_end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFunctionAsyncInvocationsRequestStatusEnum {
    WAIT = 'WAIT',
    RUNNING = 'RUNNING',
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    DISCARD = 'DISCARD'
}
