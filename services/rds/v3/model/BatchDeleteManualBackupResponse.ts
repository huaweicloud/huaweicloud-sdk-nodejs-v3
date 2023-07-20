import { DeleteBackupResult } from './DeleteBackupResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteManualBackupResponse extends SdkResponse {
    private 'delete_results'?: Array<DeleteBackupResult>;
    public constructor() { 
        super();
    }
    public withDeleteResults(deleteResults: Array<DeleteBackupResult>): BatchDeleteManualBackupResponse {
        this['delete_results'] = deleteResults;
        return this;
    }
    public set deleteResults(deleteResults: Array<DeleteBackupResult>  | undefined) {
        this['delete_results'] = deleteResults;
    }
    public get deleteResults(): Array<DeleteBackupResult> | undefined {
        return this['delete_results'];
    }
}