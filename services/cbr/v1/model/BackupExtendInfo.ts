import { ImageData } from './ImageData';


export class BackupExtendInfo {
    private 'auto_trigger'?: boolean;
    public bootable?: boolean;
    private 'snapshot_id'?: string;
    private 'support_lld'?: boolean;
    private 'supported_restore_mode'?: BackupExtendInfoSupportedRestoreModeEnum | string;
    private 'os_images_data'?: Array<ImageData>;
    private 'contain_system_disk'?: boolean;
    public encrypted?: boolean;
    private 'system_disk'?: boolean;
    private 'is_multi_az'?: boolean;
    public constructor() { 
    }
    public withAutoTrigger(autoTrigger: boolean): BackupExtendInfo {
        this['auto_trigger'] = autoTrigger;
        return this;
    }
    public set autoTrigger(autoTrigger: boolean  | undefined) {
        this['auto_trigger'] = autoTrigger;
    }
    public get autoTrigger(): boolean | undefined {
        return this['auto_trigger'];
    }
    public withBootable(bootable: boolean): BackupExtendInfo {
        this['bootable'] = bootable;
        return this;
    }
    public withSnapshotId(snapshotId: string): BackupExtendInfo {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withSupportLld(supportLld: boolean): BackupExtendInfo {
        this['support_lld'] = supportLld;
        return this;
    }
    public set supportLld(supportLld: boolean  | undefined) {
        this['support_lld'] = supportLld;
    }
    public get supportLld(): boolean | undefined {
        return this['support_lld'];
    }
    public withSupportedRestoreMode(supportedRestoreMode: BackupExtendInfoSupportedRestoreModeEnum | string): BackupExtendInfo {
        this['supported_restore_mode'] = supportedRestoreMode;
        return this;
    }
    public set supportedRestoreMode(supportedRestoreMode: BackupExtendInfoSupportedRestoreModeEnum | string  | undefined) {
        this['supported_restore_mode'] = supportedRestoreMode;
    }
    public get supportedRestoreMode(): BackupExtendInfoSupportedRestoreModeEnum | string | undefined {
        return this['supported_restore_mode'];
    }
    public withOsImagesData(osImagesData: Array<ImageData>): BackupExtendInfo {
        this['os_images_data'] = osImagesData;
        return this;
    }
    public set osImagesData(osImagesData: Array<ImageData>  | undefined) {
        this['os_images_data'] = osImagesData;
    }
    public get osImagesData(): Array<ImageData> | undefined {
        return this['os_images_data'];
    }
    public withContainSystemDisk(containSystemDisk: boolean): BackupExtendInfo {
        this['contain_system_disk'] = containSystemDisk;
        return this;
    }
    public set containSystemDisk(containSystemDisk: boolean  | undefined) {
        this['contain_system_disk'] = containSystemDisk;
    }
    public get containSystemDisk(): boolean | undefined {
        return this['contain_system_disk'];
    }
    public withEncrypted(encrypted: boolean): BackupExtendInfo {
        this['encrypted'] = encrypted;
        return this;
    }
    public withSystemDisk(systemDisk: boolean): BackupExtendInfo {
        this['system_disk'] = systemDisk;
        return this;
    }
    public set systemDisk(systemDisk: boolean  | undefined) {
        this['system_disk'] = systemDisk;
    }
    public get systemDisk(): boolean | undefined {
        return this['system_disk'];
    }
    public withIsMultiAz(isMultiAz: boolean): BackupExtendInfo {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean  | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz(): boolean | undefined {
        return this['is_multi_az'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupExtendInfoSupportedRestoreModeEnum {
    NA = 'na',
    BACKUP = ' backup',
    SNAPSHOT = ' snapshot'
}
