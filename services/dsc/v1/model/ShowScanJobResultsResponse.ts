import { DbScanResult } from './DbScanResult';
import { EsScanResult } from './EsScanResult';
import { ObsScanResult } from './ObsScanResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScanJobResultsResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'job_name'?: string;
    public type?: string;
    private 'db_scan_result'?: DbScanResult;
    private 'obs_scan_result'?: ObsScanResult;
    private 'es_scan_result'?: EsScanResult;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowScanJobResultsResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): ShowScanJobResultsResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withType(type: string): ShowScanJobResultsResponse {
        this['type'] = type;
        return this;
    }
    public withDbScanResult(dbScanResult: DbScanResult): ShowScanJobResultsResponse {
        this['db_scan_result'] = dbScanResult;
        return this;
    }
    public set dbScanResult(dbScanResult: DbScanResult  | undefined) {
        this['db_scan_result'] = dbScanResult;
    }
    public get dbScanResult(): DbScanResult | undefined {
        return this['db_scan_result'];
    }
    public withObsScanResult(obsScanResult: ObsScanResult): ShowScanJobResultsResponse {
        this['obs_scan_result'] = obsScanResult;
        return this;
    }
    public set obsScanResult(obsScanResult: ObsScanResult  | undefined) {
        this['obs_scan_result'] = obsScanResult;
    }
    public get obsScanResult(): ObsScanResult | undefined {
        return this['obs_scan_result'];
    }
    public withEsScanResult(esScanResult: EsScanResult): ShowScanJobResultsResponse {
        this['es_scan_result'] = esScanResult;
        return this;
    }
    public set esScanResult(esScanResult: EsScanResult  | undefined) {
        this['es_scan_result'] = esScanResult;
    }
    public get esScanResult(): EsScanResult | undefined {
        return this['es_scan_result'];
    }
}