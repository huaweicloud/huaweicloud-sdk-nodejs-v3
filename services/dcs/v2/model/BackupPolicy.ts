import { BackupPlan } from './BackupPlan';


export class BackupPolicy {
    private 'backup_type'?: string;
    private 'save_days'?: number;
    private 'periodical_backup_plan'?: BackupPlan;
    public constructor(backupType?: string) { 
        this['backup_type'] = backupType;
    }
    public withBackupType(backupType: string): BackupPolicy {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): string | undefined {
        return this['backup_type'];
    }
    public withSaveDays(saveDays: number): BackupPolicy {
        this['save_days'] = saveDays;
        return this;
    }
    public set saveDays(saveDays: number  | undefined) {
        this['save_days'] = saveDays;
    }
    public get saveDays(): number | undefined {
        return this['save_days'];
    }
    public withPeriodicalBackupPlan(periodicalBackupPlan: BackupPlan): BackupPolicy {
        this['periodical_backup_plan'] = periodicalBackupPlan;
        return this;
    }
    public set periodicalBackupPlan(periodicalBackupPlan: BackupPlan  | undefined) {
        this['periodical_backup_plan'] = periodicalBackupPlan;
    }
    public get periodicalBackupPlan(): BackupPlan | undefined {
        return this['periodical_backup_plan'];
    }
}