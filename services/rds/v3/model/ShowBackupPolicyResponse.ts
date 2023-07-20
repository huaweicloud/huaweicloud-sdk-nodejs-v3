import { BackupPolicy } from './BackupPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupPolicyResponse extends SdkResponse {
    private 'backup_policy'?: BackupPolicy;
    public constructor() { 
        super();
    }
    public withBackupPolicy(backupPolicy: BackupPolicy): ShowBackupPolicyResponse {
        this['backup_policy'] = backupPolicy;
        return this;
    }
    public set backupPolicy(backupPolicy: BackupPolicy  | undefined) {
        this['backup_policy'] = backupPolicy;
    }
    public get backupPolicy(): BackupPolicy | undefined {
        return this['backup_policy'];
    }
}