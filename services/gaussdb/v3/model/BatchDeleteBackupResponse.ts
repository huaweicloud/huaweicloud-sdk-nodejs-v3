import { DeleteBackupResult } from './DeleteBackupResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteBackupResponse extends SdkResponse {
    private 'failed_results'?: Array<DeleteBackupResult>;
    private 'success_count'?: number;
    private 'failed_count'?: number;
    public constructor() { 
        super();
    }
    public withFailedResults(failedResults: Array<DeleteBackupResult>): BatchDeleteBackupResponse {
        this['failed_results'] = failedResults;
        return this;
    }
    public set failedResults(failedResults: Array<DeleteBackupResult>  | undefined) {
        this['failed_results'] = failedResults;
    }
    public get failedResults(): Array<DeleteBackupResult> | undefined {
        return this['failed_results'];
    }
    public withSuccessCount(successCount: number): BatchDeleteBackupResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailedCount(failedCount: number): BatchDeleteBackupResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
}