import { ResourceExtraInfo } from './ResourceExtraInfo';


export class ResourceResp {
    private 'extra_info'?: ResourceExtraInfo | undefined;
    public id: string;
    public name: string;
    private 'protect_status'?: ResourceRespProtectStatusEnum | undefined;
    public size?: number;
    public type: string;
    private 'backup_size'?: number | undefined;
    private 'backup_count'?: number | undefined;
    private 'auto_protect'?: boolean | undefined;
    public constructor(id?: any, name?: any, type?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
    }
    public withExtraInfo(extraInfo: ResourceExtraInfo): ResourceResp {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: ResourceExtraInfo | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo() {
        return this['extra_info'];
    }
    public withId(id: string): ResourceResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResourceResp {
        this['name'] = name;
        return this;
    }
    public withProtectStatus(protectStatus: ResourceRespProtectStatusEnum): ResourceResp {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: ResourceRespProtectStatusEnum | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus() {
        return this['protect_status'];
    }
    public withSize(size: number): ResourceResp {
        this['size'] = size;
        return this;
    }
    public withType(type: string): ResourceResp {
        this['type'] = type;
        return this;
    }
    public withBackupSize(backupSize: number): ResourceResp {
        this['backup_size'] = backupSize;
        return this;
    }
    public set backupSize(backupSize: number | undefined) {
        this['backup_size'] = backupSize;
    }
    public get backupSize() {
        return this['backup_size'];
    }
    public withBackupCount(backupCount: number): ResourceResp {
        this['backup_count'] = backupCount;
        return this;
    }
    public set backupCount(backupCount: number | undefined) {
        this['backup_count'] = backupCount;
    }
    public get backupCount() {
        return this['backup_count'];
    }
    public withAutoProtect(autoProtect: boolean): ResourceResp {
        this['auto_protect'] = autoProtect;
        return this;
    }
    public set autoProtect(autoProtect: boolean | undefined) {
        this['auto_protect'] = autoProtect;
    }
    public get autoProtect() {
        return this['auto_protect'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceRespProtectStatusEnum {
    AVAILABLE = 'available',
    ERROR = 'error',
    PROTECTING = 'protecting',
    RESTORING = 'restoring',
    REMOVING = 'removing'
}
