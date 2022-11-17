
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopyInstanceResponse extends SdkResponse {
    private 'backup_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withBackupId(backupId: string): CopyInstanceResponse {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
}