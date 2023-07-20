

export class BackupInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'begin_time'?: string;
    public status?: BackupInfoStatusEnum | string;
    public type?: BackupInfoTypeEnum | string;
    private 'instance_id'?: string;
    public constructor(id?: string, name?: string, description?: string, beginTime?: string, status?: string, type?: string, instanceId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['begin_time'] = beginTime;
        this['status'] = status;
        this['type'] = type;
        this['instance_id'] = instanceId;
    }
    public withId(id: string): BackupInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BackupInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): BackupInfo {
        this['description'] = description;
        return this;
    }
    public withBeginTime(beginTime: string): BackupInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withStatus(status: BackupInfoStatusEnum | string): BackupInfo {
        this['status'] = status;
        return this;
    }
    public withType(type: BackupInfoTypeEnum | string): BackupInfo {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): BackupInfo {
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
export enum BackupInfoStatusEnum {
    BUILDING = 'BUILDING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    DELETING = 'DELETING'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupInfoTypeEnum {
    MANUAL = 'manual'
}
