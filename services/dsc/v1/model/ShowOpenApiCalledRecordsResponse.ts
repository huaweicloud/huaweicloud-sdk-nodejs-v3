import { OpenApiCalledRecord } from './OpenApiCalledRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOpenApiCalledRecordsResponse extends SdkResponse {
    public total?: number;
    public succeed?: number;
    public failed?: number;
    private 'openapi_called_records'?: Array<OpenApiCalledRecord>;
    private 'next_marker'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowOpenApiCalledRecordsResponse {
        this['total'] = total;
        return this;
    }
    public withSucceed(succeed: number): ShowOpenApiCalledRecordsResponse {
        this['succeed'] = succeed;
        return this;
    }
    public withFailed(failed: number): ShowOpenApiCalledRecordsResponse {
        this['failed'] = failed;
        return this;
    }
    public withOpenapiCalledRecords(openapiCalledRecords: Array<OpenApiCalledRecord>): ShowOpenApiCalledRecordsResponse {
        this['openapi_called_records'] = openapiCalledRecords;
        return this;
    }
    public set openapiCalledRecords(openapiCalledRecords: Array<OpenApiCalledRecord>  | undefined) {
        this['openapi_called_records'] = openapiCalledRecords;
    }
    public get openapiCalledRecords(): Array<OpenApiCalledRecord> | undefined {
        return this['openapi_called_records'];
    }
    public withNextMarker(nextMarker: string): ShowOpenApiCalledRecordsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
}