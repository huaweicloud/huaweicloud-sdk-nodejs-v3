import { BackupPlan } from './BackupPlan';


export class BackupPolicy {
    private 'backup_type': string | undefined;
    private 'save_days'?: number | undefined;
    private 'periodical_backup_plan'?: BackupPlan | undefined;
    public constructor(backupType?: any) { 
        this['backup_type'] = backupType;
    }
    public withBackupType(backupType: string): BackupPolicy {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: string | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType() {
        return this['backup_type'];
    }
    public withSaveDays(saveDays: number): BackupPolicy {
        this['save_days'] = saveDays;
        return this;
    }
    public set saveDays(saveDays: number | undefined) {
        this['save_days'] = saveDays;
    }
    public get saveDays() {
        return this['save_days'];
    }
    public withPeriodicalBackupPlan(periodicalBackupPlan: BackupPlan): BackupPolicy {
        this['periodical_backup_plan'] = periodicalBackupPlan;
        return this;
    }
    public set periodicalBackupPlan(periodicalBackupPlan: BackupPlan | undefined) {
        this['periodical_backup_plan'] = periodicalBackupPlan;
    }
    public get periodicalBackupPlan() {
        return this['periodical_backup_plan'];
    }
}