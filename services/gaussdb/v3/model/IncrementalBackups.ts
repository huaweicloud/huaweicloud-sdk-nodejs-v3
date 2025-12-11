

export class IncrementalBackups {
    public id?: string;
    public name?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public size?: number;
    private 'backup_type'?: string;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withId(id: string): IncrementalBackups {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IncrementalBackups {
        this['name'] = name;
        return this;
    }
    public withBeginTime(beginTime: string): IncrementalBackups {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): IncrementalBackups {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withSize(size: number): IncrementalBackups {
        this['size'] = size;
        return this;
    }
    public withBackupType(backupType: string): IncrementalBackups {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): string | undefined {
        return this['backup_type'];
    }
    public withInstanceId(instanceId: string): IncrementalBackups {
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