

export class HotfixInfoResult {
    public version?: string;
    private 'common_patch'?: HotfixInfoResultCommonPatchEnum | string;
    private 'backup_sensitive'?: boolean;
    public descripition?: string;
    public constructor() { 
    }
    public withVersion(version: string): HotfixInfoResult {
        this['version'] = version;
        return this;
    }
    public withCommonPatch(commonPatch: HotfixInfoResultCommonPatchEnum | string): HotfixInfoResult {
        this['common_patch'] = commonPatch;
        return this;
    }
    public set commonPatch(commonPatch: HotfixInfoResultCommonPatchEnum | string  | undefined) {
        this['common_patch'] = commonPatch;
    }
    public get commonPatch(): HotfixInfoResultCommonPatchEnum | string | undefined {
        return this['common_patch'];
    }
    public withBackupSensitive(backupSensitive: boolean): HotfixInfoResult {
        this['backup_sensitive'] = backupSensitive;
        return this;
    }
    public set backupSensitive(backupSensitive: boolean  | undefined) {
        this['backup_sensitive'] = backupSensitive;
    }
    public get backupSensitive(): boolean | undefined {
        return this['backup_sensitive'];
    }
    public withDescripition(descripition: string): HotfixInfoResult {
        this['descripition'] = descripition;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HotfixInfoResultCommonPatchEnum {
    COMMON = 'common',
    CERTAIN = 'certain'
}
