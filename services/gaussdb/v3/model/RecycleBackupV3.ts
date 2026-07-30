

export class RecycleBackupV3 {
    private 'backup_level'?: string;
    private 'backup_id'?: string;
    private 'backup_name'?: string;
    public size?: number;
    public status?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
    }
    public withBackupLevel(backupLevel: string): RecycleBackupV3 {
        this['backup_level'] = backupLevel;
        return this;
    }
    public set backupLevel(backupLevel: string  | undefined) {
        this['backup_level'] = backupLevel;
    }
    public get backupLevel(): string | undefined {
        return this['backup_level'];
    }
    public withBackupId(backupId: string): RecycleBackupV3 {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBackupName(backupName: string): RecycleBackupV3 {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withSize(size: number): RecycleBackupV3 {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): RecycleBackupV3 {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: number): RecycleBackupV3 {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): RecycleBackupV3 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}