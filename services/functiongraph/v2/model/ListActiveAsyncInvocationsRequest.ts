

export class ListActiveAsyncInvocationsRequest {
    private 'function_urn'?: string;
    public requests?: string;
    public marker?: string;
    public limit?: string;
    public status?: string;
    private 'query_begin_time'?: Date;
    private 'query_end_time'?: Date;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): ListActiveAsyncInvocationsRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withRequests(requests: string): ListActiveAsyncInvocationsRequest {
        this['requests'] = requests;
        return this;
    }
    public withMarker(marker: string): ListActiveAsyncInvocationsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: string): ListActiveAsyncInvocationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: string): ListActiveAsyncInvocationsRequest {
        this['status'] = status;
        return this;
    }
    public withQueryBeginTime(queryBeginTime: Date): ListActiveAsyncInvocationsRequest {
        this['query_begin_time'] = queryBeginTime;
        return this;
    }
    public set queryBeginTime(queryBeginTime: Date  | undefined) {
        this['query_begin_time'] = queryBeginTime;
    }
    public get queryBeginTime(): Date | undefined {
        return this['query_begin_time'];
    }
    public withQueryEndTime(queryEndTime: Date): ListActiveAsyncInvocationsRequest {
        this['query_end_time'] = queryEndTime;
        return this;
    }
    public set queryEndTime(queryEndTime: Date  | undefined) {
        this['query_end_time'] = queryEndTime;
    }
    public get queryEndTime(): Date | undefined {
        return this['query_end_time'];
    }
}