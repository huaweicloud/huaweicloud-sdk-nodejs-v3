

export class HotfixInfo {
    public version?: string;
    private 'common_patch'?: HotfixInfoCommonPatchEnum | string;
    private 'backup_sensitive'?: boolean;
    public descripition?: string;
    public constructor() { 
    }
    public withVersion(version: string): HotfixInfo {
        this['version'] = version;
        return this;
    }
    public withCommonPatch(commonPatch: HotfixInfoCommonPatchEnum | string): HotfixInfo {
        this['common_patch'] = commonPatch;
        return this;
    }
    public set commonPatch(commonPatch: HotfixInfoCommonPatchEnum | string  | undefined) {
        this['common_patch'] = commonPatch;
    }
    public get commonPatch(): HotfixInfoCommonPatchEnum | string | undefined {
        return this['common_patch'];
    }
    public withBackupSensitive(backupSensitive: boolean): HotfixInfo {
        this['backup_sensitive'] = backupSensitive;
        return this;
    }
    public set backupSensitive(backupSensitive: boolean  | undefined) {
        this['backup_sensitive'] = backupSensitive;
    }
    public get backupSensitive(): boolean | undefined {
        return this['backup_sensitive'];
    }
    public withDescripition(descripition: string): HotfixInfo {
        this['descripition'] = descripition;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HotfixInfoCommonPatchEnum {
    COMMON = 'common',
    CERTAIN = 'certain'
}
