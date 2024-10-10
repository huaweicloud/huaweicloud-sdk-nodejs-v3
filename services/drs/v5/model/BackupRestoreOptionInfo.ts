

export class BackupRestoreOptionInfo {
    private 'is_cover'?: boolean;
    private 'is_default_restore'?: boolean;
    private 'is_last_backup'?: boolean;
    private 'is_precheck'?: boolean;
    private 'recovery_mode'?: BackupRestoreOptionInfoRecoveryModeEnum | string;
    private 'db_names'?: Array<string>;
    private 'reset_db_name_map'?: { [key: string]: string; };
    private 'is_delete_backup_file'?: boolean;
    public constructor(isLastBackup?: boolean, isPrecheck?: boolean, recoveryMode?: string) { 
        this['is_last_backup'] = isLastBackup;
        this['is_precheck'] = isPrecheck;
        this['recovery_mode'] = recoveryMode;
    }
    public withIsCover(isCover: boolean): BackupRestoreOptionInfo {
        this['is_cover'] = isCover;
        return this;
    }
    public set isCover(isCover: boolean  | undefined) {
        this['is_cover'] = isCover;
    }
    public get isCover(): boolean | undefined {
        return this['is_cover'];
    }
    public withIsDefaultRestore(isDefaultRestore: boolean): BackupRestoreOptionInfo {
        this['is_default_restore'] = isDefaultRestore;
        return this;
    }
    public set isDefaultRestore(isDefaultRestore: boolean  | undefined) {
        this['is_default_restore'] = isDefaultRestore;
    }
    public get isDefaultRestore(): boolean | undefined {
        return this['is_default_restore'];
    }
    public withIsLastBackup(isLastBackup: boolean): BackupRestoreOptionInfo {
        this['is_last_backup'] = isLastBackup;
        return this;
    }
    public set isLastBackup(isLastBackup: boolean  | undefined) {
        this['is_last_backup'] = isLastBackup;
    }
    public get isLastBackup(): boolean | undefined {
        return this['is_last_backup'];
    }
    public withIsPrecheck(isPrecheck: boolean): BackupRestoreOptionInfo {
        this['is_precheck'] = isPrecheck;
        return this;
    }
    public set isPrecheck(isPrecheck: boolean  | undefined) {
        this['is_precheck'] = isPrecheck;
    }
    public get isPrecheck(): boolean | undefined {
        return this['is_precheck'];
    }
    public withRecoveryMode(recoveryMode: BackupRestoreOptionInfoRecoveryModeEnum | string): BackupRestoreOptionInfo {
        this['recovery_mode'] = recoveryMode;
        return this;
    }
    public set recoveryMode(recoveryMode: BackupRestoreOptionInfoRecoveryModeEnum | string  | undefined) {
        this['recovery_mode'] = recoveryMode;
    }
    public get recoveryMode(): BackupRestoreOptionInfoRecoveryModeEnum | string | undefined {
        return this['recovery_mode'];
    }
    public withDbNames(dbNames: Array<string>): BackupRestoreOptionInfo {
        this['db_names'] = dbNames;
        return this;
    }
    public set dbNames(dbNames: Array<string>  | undefined) {
        this['db_names'] = dbNames;
    }
    public get dbNames(): Array<string> | undefined {
        return this['db_names'];
    }
    public withResetDbNameMap(resetDbNameMap: { [key: string]: string; }): BackupRestoreOptionInfo {
        this['reset_db_name_map'] = resetDbNameMap;
        return this;
    }
    public set resetDbNameMap(resetDbNameMap: { [key: string]: string; }  | undefined) {
        this['reset_db_name_map'] = resetDbNameMap;
    }
    public get resetDbNameMap(): { [key: string]: string; } | undefined {
        return this['reset_db_name_map'];
    }
    public withIsDeleteBackupFile(isDeleteBackupFile: boolean): BackupRestoreOptionInfo {
        this['is_delete_backup_file'] = isDeleteBackupFile;
        return this;
    }
    public set isDeleteBackupFile(isDeleteBackupFile: boolean  | undefined) {
        this['is_delete_backup_file'] = isDeleteBackupFile;
    }
    public get isDeleteBackupFile(): boolean | undefined {
        return this['is_delete_backup_file'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupRestoreOptionInfoRecoveryModeEnum {
    FULL = 'full',
    INCRE = 'incre'
}
