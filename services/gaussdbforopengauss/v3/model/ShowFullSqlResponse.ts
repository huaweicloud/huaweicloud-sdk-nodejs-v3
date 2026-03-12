import { FullSqlComponetResult } from './FullSqlComponetResult';
import { FullSqlTraceStatisticsResult } from './FullSqlTraceStatisticsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFullSqlResponse extends SdkResponse {
    private 'trace_statistics'?: FullSqlTraceStatisticsResult;
    public components?: Array<FullSqlComponetResult>;
    public constructor() { 
        super();
    }
    public withTraceStatistics(traceStatistics: FullSqlTraceStatisticsResult): ShowFullSqlResponse {
        this['trace_statistics'] = traceStatistics;
        return this;
    }
    public set traceStatistics(traceStatistics: FullSqlTraceStatisticsResult  | undefined) {
        this['trace_statistics'] = traceStatistics;
    }
    public get traceStatistics(): FullSqlTraceStatisticsResult | undefined {
        return this['trace_statistics'];
    }
    public withComponents(components: Array<FullSqlComponetResult>): ShowFullSqlResponse {
        this['components'] = components;
        return this;
    }
}