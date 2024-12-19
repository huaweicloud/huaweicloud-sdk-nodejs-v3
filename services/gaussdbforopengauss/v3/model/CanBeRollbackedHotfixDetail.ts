

export class CanBeRollbackedHotfixDetail {
    public version?: string;
    private 'common_patch'?: string;
    private 'backup_sensitive'?: boolean;
    public descripition?: string;
    public constructor() { 
    }
    public withVersion(version: string): CanBeRollbackedHotfixDetail {
        this['version'] = version;
        return this;
    }
    public withCommonPatch(commonPatch: string): CanBeRollbackedHotfixDetail {
        this['common_patch'] = commonPatch;
        return this;
    }
    public set commonPatch(commonPatch: string  | undefined) {
        this['common_patch'] = commonPatch;
    }
    public get commonPatch(): string | undefined {
        return this['common_patch'];
    }
    public withBackupSensitive(backupSensitive: boolean): CanBeRollbackedHotfixDetail {
        this['backup_sensitive'] = backupSensitive;
        return this;
    }
    public set backupSensitive(backupSensitive: boolean  | undefined) {
        this['backup_sensitive'] = backupSensitive;
    }
    public get backupSensitive(): boolean | undefined {
        return this['backup_sensitive'];
    }
    public withDescripition(descripition: string): CanBeRollbackedHotfixDetail {
        this['descripition'] = descripition;
        return this;
    }
}