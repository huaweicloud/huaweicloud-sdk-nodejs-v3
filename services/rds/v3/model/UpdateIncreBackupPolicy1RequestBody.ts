import { ShowIncreBackupPolicyRespBodyIncreBackupPolicy } from './ShowIncreBackupPolicyRespBodyIncreBackupPolicy';


export class UpdateIncreBackupPolicy1RequestBody {
    private 'incre_backup_policy'?: ShowIncreBackupPolicyRespBodyIncreBackupPolicy;
    public constructor(increBackupPolicy?: ShowIncreBackupPolicyRespBodyIncreBackupPolicy) { 
        this['incre_backup_policy'] = increBackupPolicy;
    }
    public withIncreBackupPolicy(increBackupPolicy: ShowIncreBackupPolicyRespBodyIncreBackupPolicy): UpdateIncreBackupPolicy1RequestBody {
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