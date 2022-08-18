

export class ListAsyncInvocationsRequest {
    private 'function_urn': string | undefined;
    private 'request_id'?: string | undefined;
    public marker?: string;
    public limit?: string;
    public status?: string;
    private 'query_begin_time'?: Date | undefined;
    private 'query_end_time'?: Date | undefined;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): ListAsyncInvocationsRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withRequestId(requestId: string): ListAsyncInvocationsRequest {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withMarker(marker: string): ListAsyncInvocationsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: string): ListAsyncInvocationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: string): ListAsyncInvocationsRequest {
        this['status'] = status;
        return this;
    }
    public withQueryBeginTime(queryBeginTime: Date): ListAsyncInvocationsRequest {
        this['query_begin_time'] = queryBeginTime;
        return this;
    }
    public set queryBeginTime(queryBeginTime: Date | undefined) {
        this['query_begin_time'] = queryBeginTime;
    }
    public get queryBeginTime() {
        return this['query_begin_time'];
    }
    public withQueryEndTime(queryEndTime: Date): ListAsyncInvocationsRequest {
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