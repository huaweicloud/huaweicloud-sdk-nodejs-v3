import { BackupPolicyItem } from './BackupPolicyItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupPolicyResponse extends SdkResponse {
    private 'backup_policy'?: BackupPolicyItem;
    public constructor() { 
        super();
    }
    public withBackupPolicy(backupPolicy: BackupPolicyItem): ShowBackupPolicyResponse {
        this['backup_policy'] = backupPolicy;
        return this;
    }
    public set backupPolicy(backupPolicy: BackupPolicyItem  | undefined) {
        this['backup_policy'] = backupPolicy;
    }
    public get backupPolicy(): BackupPolicyItem | undefined {
        return this['backup_policy'];
    }
}