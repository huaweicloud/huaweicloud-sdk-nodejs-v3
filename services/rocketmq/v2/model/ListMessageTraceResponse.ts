import { ListMessageTraceRespTrace } from './ListMessageTraceRespTrace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMessageTraceResponse extends SdkResponse {
    public total?: number;
    private 'next_offset'?: number;
    private 'previous_offset'?: number;
    public trace?: Array<ListMessageTraceRespTrace>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListMessageTraceResponse {
        this['total'] = total;
        return this;
    }
    public withNextOffset(nextOffset: number): ListMessageTraceResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number  | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset(): number | undefined {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ListMessageTraceResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number  | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset(): number | undefined {
        return this['previous_offset'];
    }
    public withTrace(trace: Array<ListMessageTraceRespTrace>): ListMessageTraceResponse {
        this['trace'] = trace;
        return this;
    }
}