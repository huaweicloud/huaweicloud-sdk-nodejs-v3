import { QueryInstanceBackupResponseBodyDatastore } from './QueryInstanceBackupResponseBodyDatastore';


export class QueryInstanceBackupResponseBodyBackups {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    public status?: QueryInstanceBackupResponseBodyBackupsStatusEnum | string;
    public size?: number;
    public type?: QueryInstanceBackupResponseBodyBackupsTypeEnum | string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public datastore?: QueryInstanceBackupResponseBodyDatastore;
    public constructor(id?: string, name?: string, description?: string, beginTime?: Date, endTime?: Date, status?: string, size?: number, type?: string, instanceId?: string, instanceName?: string, datastore?: QueryInstanceBackupResponseBodyDatastore) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
        this['status'] = status;
        this['size'] = size;
        this['type'] = type;
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['datastore'] = datastore;
    }
    public withId(id: string): QueryInstanceBackupResponseBodyBackups {
        this['id'] = id;
        return this;
    }
    public withName(name: string): QueryInstanceBackupResponseBodyBackups {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): QueryInstanceBackupResponseBodyBackups {
        this['description'] = description;
        return this;
    }
    public withBeginTime(beginTime: Date): QueryInstanceBackupResponseBodyBackups {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): QueryInstanceBackupResponseBodyBackups {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withStatus(status: QueryInstanceBackupResponseBodyBackupsStatusEnum | string): QueryInstanceBackupResponseBodyBackups {
        this['status'] = status;
        return this;
    }
    public withSize(size: number): QueryInstanceBackupResponseBodyBackups {
        this['size'] = size;
        return this;
    }
    public withType(type: QueryInstanceBackupResponseBodyBackupsTypeEnum | string): QueryInstanceBackupResponseBodyBackups {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): QueryInstanceBackupResponseBodyBackups {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): QueryInstanceBackupResponseBodyBackups {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDatastore(datastore: QueryInstanceBackupResponseBodyDatastore): QueryInstanceBackupResponseBodyBackups {
        this['datastore'] = datastore;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryInstanceBackupResponseBodyBackupsStatusEnum {
    BUILDING = 'BUILDING：备份中',
    COMPLETED = 'COMPLETED：备份完成',
    FAILED = 'FAILED：备份失败'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryInstanceBackupResponseBodyBackupsTypeEnum {
    AUTO = 'Auto 自动全量备份',
    MANUAL = 'Manual 手动全量备份。'
}
