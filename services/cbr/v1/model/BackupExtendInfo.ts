import { ImageData } from './ImageData';


export class BackupExtendInfo {
    private 'auto_trigger'?: boolean | undefined;
    public bootable?: boolean;
    public incremental?: boolean;
    private 'snapshot_id'?: string | undefined;
    private 'support_lld'?: boolean | undefined;
    private 'supported_restore_mode'?: BackupExtendInfoSupportedRestoreModeEnum | undefined;
    private 'os_images_data'?: Array<ImageData> | undefined;
    private 'contain_system_disk'?: boolean | undefined;
    public encrypted?: boolean;
    private 'system_disk'?: boolean | undefined;
    private 'is_multi_az'?: boolean | undefined;
    public constructor() { 
    }
    public withAutoTrigger(autoTrigger: boolean): BackupExtendInfo {
        this['auto_trigger'] = autoTrigger;
        return this;
    }
    public set autoTrigger(autoTrigger: boolean | undefined) {
        this['auto_trigger'] = autoTrigger;
    }
    public get autoTrigger() {
        return this['auto_trigger'];
    }
    public withBootable(bootable: boolean): BackupExtendInfo {
        this['bootable'] = bootable;
        return this;
    }
    public withIncremental(incremental: boolean): BackupExtendInfo {
        this['incremental'] = incremental;
        return this;
    }
    public withSnapshotId(snapshotId: string): BackupExtendInfo {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId() {
        return this['snapshot_id'];
    }
    public withSupportLld(supportLld: boolean): BackupExtendInfo {
        this['support_lld'] = supportLld;
        return this;
    }
    public set supportLld(supportLld: boolean | undefined) {
        this['support_lld'] = supportLld;
    }
    public get supportLld() {
        return this['support_lld'];
    }
    public withSupportedRestoreMode(supportedRestoreMode: BackupExtendInfoSupportedRestoreModeEnum): BackupExtendInfo {
        this['supported_restore_mode'] = supportedRestoreMode;
        return this;
    }
    public set supportedRestoreMode(supportedRestoreMode: BackupExtendInfoSupportedRestoreModeEnum | undefined) {
        this['supported_restore_mode'] = supportedRestoreMode;
    }
    public get supportedRestoreMode() {
        return this['supported_restore_mode'];
    }
    public withOsImagesData(osImagesData: Array<ImageData>): BackupExtendInfo {
        this['os_images_data'] = osImagesData;
        return this;
    }
    public set osImagesData(osImagesData: Array<ImageData> | undefined) {
        this['os_images_data'] = osImagesData;
    }
    public get osImagesData() {
        return this['os_images_data'];
    }
    public withContainSystemDisk(containSystemDisk: boolean): BackupExtendInfo {
        this['contain_system_disk'] = containSystemDisk;
        return this;
    }
    public set containSystemDisk(containSystemDisk: boolean | undefined) {
        this['contain_system_disk'] = containSystemDisk;
    }
    public get containSystemDisk() {
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
    public set systemDisk(systemDisk: boolean | undefined) {
        this['system_disk'] = systemDisk;
    }
    public get systemDisk() {
        return this['system_disk'];
    }
    public withIsMultiAz(isMultiAz: boolean): BackupExtendInfo {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz() {
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
