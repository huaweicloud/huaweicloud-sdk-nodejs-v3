

export class CheckpointResourceResp {
    private 'extra_info'?: string | undefined;
    public id: string;
    public name: string;
    private 'protect_status'?: CheckpointResourceRespProtectStatusEnum | undefined;
    private 'resource_size'?: string | undefined;
    public type: string;
    private 'backup_size'?: string | undefined;
    private 'backup_count'?: string | undefined;
    public constructor(id?: any, name?: any, type?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
    }
    public withExtraInfo(extraInfo: string): CheckpointResourceResp {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: string | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo() {
        return this['extra_info'];
    }
    public withId(id: string): CheckpointResourceResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CheckpointResourceResp {
        this['name'] = name;
        return this;
    }
    public withProtectStatus(protectStatus: CheckpointResourceRespProtectStatusEnum): CheckpointResourceResp {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: CheckpointResourceRespProtectStatusEnum | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus() {
        return this['protect_status'];
    }
    public withResourceSize(resourceSize: string): CheckpointResourceResp {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: string | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize() {
        return this['resource_size'];
    }
    public withType(type: string): CheckpointResourceResp {
        this['type'] = type;
        return this;
    }
    public withBackupSize(backupSize: string): CheckpointResourceResp {
        this['backup_size'] = backupSize;
        return this;
    }
    public set backupSize(backupSize: string | undefined) {
        this['backup_size'] = backupSize;
    }
    public get backupSize() {
        return this['backup_size'];
    }
    public withBackupCount(backupCount: string): CheckpointResourceResp {
        this['backup_count'] = backupCount;
        return this;
    }
    public set backupCount(backupCount: string | undefined) {
        this['backup_count'] = backupCount;
    }
    public get backupCount() {
        return this['backup_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckpointResourceRespProtectStatusEnum {
    AVAILABLE = 'available',
    ERROR = 'error',
    PROTECTING = 'protecting',
    RESTORING = 'restoring',
    REMOVING = 'removing'
}
