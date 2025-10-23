import { FullSqlComponetResult } from './FullSqlComponetResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFullSqlResponse extends SdkResponse {
    private 'trace_statistics'?: object;
    public components?: Array<FullSqlComponetResult>;
    public constructor() { 
        super();
    }
    public withTraceStatistics(traceStatistics: object): ShowFullSqlResponse {
        this['trace_statistics'] = traceStatistics;
        return this;
    }
    public set traceStatistics(traceStatistics: object  | undefined) {
        this['trace_statistics'] = traceStatistics;
    }
    public get traceStatistics(): object | undefined {
        return this['trace_statistics'];
    }
    public withComponents(components: Array<FullSqlComponetResult>): ShowFullSqlResponse {
        this['components'] = components;
        return this;
    }
}