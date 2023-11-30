import { RestoreResult } from './RestoreResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRestorePostgreSqlTablesResponse extends SdkResponse {
    private 'restore_result'?: Array<RestoreResult>;
    public constructor() { 
        super();
    }
    public withRestoreResult(restoreResult: Array<RestoreResult>): BatchRestorePostgreSqlTablesResponse {
        this['restore_result'] = restoreResult;
        return this;
    }
    public set restoreResult(restoreResult: Array<RestoreResult>  | undefined) {
        this['restore_result'] = restoreResult;
    }
    public get restoreResult(): Array<RestoreResult> | undefined {
        return this['restore_result'];
    }
}