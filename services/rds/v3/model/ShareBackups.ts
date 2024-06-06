

export class ShareBackups {
    public id?: string;
    public name?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    public size?: number;
    public type?: string;
    private 'backup_method'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_status'?: string;
    public datastore?: object;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withId(id: string): ShareBackups {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShareBackups {
        this['name'] = name;
        return this;
    }
    public withBeginTime(beginTime: string): ShareBackups {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShareBackups {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): ShareBackups {
        this['status'] = status;
        return this;
    }
    public withSize(size: number): ShareBackups {
        this['size'] = size;
        return this;
    }
    public withType(type: string): ShareBackups {
        this['type'] = type;
        return this;
    }
    public withBackupMethod(backupMethod: string): ShareBackups {
        this['backup_method'] = backupMethod;
        return this;
    }
    public set backupMethod(backupMethod: string  | undefined) {
        this['backup_method'] = backupMethod;
    }
    public get backupMethod(): string | undefined {
        return this['backup_method'];
    }
    public withInstanceId(instanceId: string): ShareBackups {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ShareBackups {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): ShareBackups {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withDatastore(datastore: object): ShareBackups {
        this['datastore'] = datastore;
        return this;
    }
    public withUserName(userName: string): ShareBackups {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}