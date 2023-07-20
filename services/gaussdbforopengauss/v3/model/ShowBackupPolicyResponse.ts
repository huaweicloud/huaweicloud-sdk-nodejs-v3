import { ShowBackupPolicy } from './ShowBackupPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupPolicyResponse extends SdkResponse {
    private 'backup_policy'?: ShowBackupPolicy;
    public constructor() { 
        super();
    }
    public withBackupPolicy(backupPolicy: ShowBackupPolicy): ShowBackupPolicyResponse {
        this['backup_policy'] = backupPolicy;
        return this;
    }
    public set backupPolicy(backupPolicy: ShowBackupPolicy  | undefined) {
        this['backup_policy'] = backupPolicy;
    }
    public get backupPolicy(): ShowBackupPolicy | undefined {
        return this['backup_policy'];
    }
}