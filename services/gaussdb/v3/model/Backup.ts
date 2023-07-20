

export class Backup {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'begin_time'?: string;
    public status?: BackupStatusEnum | string;
    public type?: BackupTypeEnum | string;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withId(id: string): Backup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Backup {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Backup {
        this['description'] = description;
        return this;
    }
    public withBeginTime(beginTime: string): Backup {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withStatus(status: BackupStatusEnum | string): Backup {
        this['status'] = status;
        return this;
    }
    public withType(type: BackupTypeEnum | string): Backup {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): Backup {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupStatusEnum {
    BUILDING = 'BUILDING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    AVAILABLE = 'AVAILABLE'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupTypeEnum {
    MANUAL = 'manual'
}
