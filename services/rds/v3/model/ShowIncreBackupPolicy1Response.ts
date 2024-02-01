import { ShowIncreBackupPolicyRespBodyIncreBackupPolicy } from './ShowIncreBackupPolicyRespBodyIncreBackupPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIncreBackupPolicy1Response extends SdkResponse {
    private 'incre_backup_policy'?: ShowIncreBackupPolicyRespBodyIncreBackupPolicy;
    public constructor() { 
        super();
    }
    public withIncreBackupPolicy(increBackupPolicy: ShowIncreBackupPolicyRespBodyIncreBackupPolicy): ShowIncreBackupPolicy1Response {
        this['incre_backup_policy'] = increBackupPolicy;
        return this;
    }
    public set increBackupPolicy(increBackupPolicy: ShowIncreBackupPolicyRespBodyIncreBackupPolicy  | undefined) {
        this['incre_backup_policy'] = increBackupPolicy;
    }
    public get increBackupPolicy(): ShowIncreBackupPolicyRespBodyIncreBackupPolicy | undefined {
        return this['incre_backup_policy'];
    }
}