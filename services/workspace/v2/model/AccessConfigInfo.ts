import { BackupInfo } from './BackupInfo';


export class AccessConfigInfo {
    private 'site_id'?: string;
    private 'backup_mode'?: AccessConfigInfoBackupModeEnum | string;
    private 'backup_info'?: Array<BackupInfo>;
    public constructor(siteId?: string, backupMode?: string) { 
        this['site_id'] = siteId;
        this['backup_mode'] = backupMode;
    }
    public withSiteId(siteId: string): AccessConfigInfo {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withBackupMode(backupMode: AccessConfigInfoBackupModeEnum | string): AccessConfigInfo {
        this['backup_mode'] = backupMode;
        return this;
    }
    public set backupMode(backupMode: AccessConfigInfoBackupModeEnum | string  | undefined) {
        this['backup_mode'] = backupMode;
    }
    public get backupMode(): AccessConfigInfoBackupModeEnum | string | undefined {
        return this['backup_mode'];
    }
    public withBackupInfo(backupInfo: Array<BackupInfo>): AccessConfigInfo {
        this['backup_info'] = backupInfo;
        return this;
    }
    public set backupInfo(backupInfo: Array<BackupInfo>  | undefined) {
        this['backup_info'] = backupInfo;
    }
    public get backupInfo(): Array<BackupInfo> | undefined {
        return this['backup_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigInfoBackupModeEnum {
    ON = 'ON',
    OFF = 'OFF'
}
