import { BackupDatabase } from './BackupDatabase';


export class BackupForList {
    public id?: string;
    public name?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public datastore?: BackupDatabase;
    public type?: BackupForListTypeEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: BackupForListStatusEnum | string;
    public size?: number;
    public description?: string;
    public constructor(id?: string, name?: string, instanceId?: string, instanceName?: string, datastore?: BackupDatabase, type?: string, beginTime?: string, endTime?: string, status?: string, size?: number, description?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['datastore'] = datastore;
        this['type'] = type;
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
        this['status'] = status;
        this['size'] = size;
        this['description'] = description;
    }
    public withId(id: string): BackupForList {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BackupForList {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): BackupForList {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): BackupForList {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDatastore(datastore: BackupDatabase): BackupForList {
        this['datastore'] = datastore;
        return this;
    }
    public withType(type: BackupForListTypeEnum | string): BackupForList {
        this['type'] = type;
        return this;
    }
    public withBeginTime(beginTime: string): BackupForList {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): BackupForList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: BackupForListStatusEnum | string): BackupForList {
        this['status'] = status;
        return this;
    }
    public withSize(size: number): BackupForList {
        this['size'] = size;
        return this;
    }
    public withDescription(description: string): BackupForList {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupForListTypeEnum {
    AUTO = 'auto',
    MANUAL = 'manual',
    FRAGMENT = 'fragment',
    INCREMENTAL = 'incremental'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupForListStatusEnum {
    BUILDING = 'BUILDING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    DELETING = 'DELETING'
}
