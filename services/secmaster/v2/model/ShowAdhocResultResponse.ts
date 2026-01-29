import { AdhocQueryAnalysisField } from './AdhocQueryAnalysisField';
import { DataRow } from './DataRow';
import { ShowAdhocQueryResultResponseBodyTips } from './ShowAdhocQueryResultResponseBodyTips';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAdhocResultResponse extends SdkResponse {
    public batch?: number;
    public schema?: Array<AdhocQueryAnalysisField>;
    public datarows?: Array<Array<object>>;
    private 'datarows_upsert'?: Array<Array<DataRow>>;
    public total?: number;
    public size?: number;
    public next?: number;
    public tips?: ShowAdhocQueryResultResponseBodyTips;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withBatch(batch: number): ShowAdhocResultResponse {
        this['batch'] = batch;
        return this;
    }
    public withSchema(schema: Array<AdhocQueryAnalysisField>): ShowAdhocResultResponse {
        this['schema'] = schema;
        return this;
    }
    public withDatarows(datarows: Array<Array<object>>): ShowAdhocResultResponse {
        this['datarows'] = datarows;
        return this;
    }
    public withDatarowsUpsert(datarowsUpsert: Array<Array<DataRow>>): ShowAdhocResultResponse {
        this['datarows_upsert'] = datarowsUpsert;
        return this;
    }
    public set datarowsUpsert(datarowsUpsert: Array<Array<DataRow>>  | undefined) {
        this['datarows_upsert'] = datarowsUpsert;
    }
    public get datarowsUpsert(): Array<Array<DataRow>> | undefined {
        return this['datarows_upsert'];
    }
    public withTotal(total: number): ShowAdhocResultResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ShowAdhocResultResponse {
        this['size'] = size;
        return this;
    }
    public withNext(next: number): ShowAdhocResultResponse {
        this['next'] = next;
        return this;
    }
    public withTips(tips: ShowAdhocQueryResultResponseBodyTips): ShowAdhocResultResponse {
        this['tips'] = tips;
        return this;
    }
    public withJobId(jobId: string): ShowAdhocResultResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}