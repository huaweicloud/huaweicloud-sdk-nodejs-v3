import { PostgreSQLRestoreResult } from './PostgreSQLRestoreResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRestorePostgreSqlTablesResponse extends SdkResponse {
    private 'restore_result'?: Array<PostgreSQLRestoreResult>;
    public constructor() { 
        super();
    }
    public withRestoreResult(restoreResult: Array<PostgreSQLRestoreResult>): BatchRestorePostgreSqlTablesResponse {
        this['restore_result'] = restoreResult;
        return this;
    }
    public set restoreResult(restoreResult: Array<PostgreSQLRestoreResult>  | undefined) {
        this['restore_result'] = restoreResult;
    }
    public get restoreResult(): Array<PostgreSQLRestoreResult> | undefined {
        return this['restore_result'];
    }
}