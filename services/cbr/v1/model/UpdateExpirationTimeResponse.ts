
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateExpirationTimeResponse extends SdkResponse {
    private 'affected_backups_count'?: number;
    private 'new_expiration_day'?: string;
    private 'operation_log_id'?: string;
    public constructor() { 
        super();
    }
    public withAffectedBackupsCount(affectedBackupsCount: number): UpdateExpirationTimeResponse {
        this['affected_backups_count'] = affectedBackupsCount;
        return this;
    }
    public set affectedBackupsCount(affectedBackupsCount: number  | undefined) {
        this['affected_backups_count'] = affectedBackupsCount;
    }
    public get affectedBackupsCount(): number | undefined {
        return this['affected_backups_count'];
    }
    public withNewExpirationDay(newExpirationDay: string): UpdateExpirationTimeResponse {
        this['new_expiration_day'] = newExpirationDay;
        return this;
    }
    public set newExpirationDay(newExpirationDay: string  | undefined) {
        this['new_expiration_day'] = newExpirationDay;
    }
    public get newExpirationDay(): string | undefined {
        return this['new_expiration_day'];
    }
    public withOperationLogId(operationLogId: string): UpdateExpirationTimeResponse {
        this['operation_log_id'] = operationLogId;
        return this;
    }
    public set operationLogId(operationLogId: string  | undefined) {
        this['operation_log_id'] = operationLogId;
    }
    public get operationLogId(): string | undefined {
        return this['operation_log_id'];
    }
}