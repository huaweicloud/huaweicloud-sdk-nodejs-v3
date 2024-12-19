import { DatastoreResult } from './DatastoreResult';


export class ListBackupsResult {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: ListBackupsResultStatusEnum | string;
    public size?: number;
    public type?: ListBackupsResultTypeEnum | string;
    public datastore?: DatastoreResult;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ListBackupsResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListBackupsResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListBackupsResult {
        this['description'] = description;
        return this;
    }
    public withBeginTime(beginTime: string): ListBackupsResult {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListBackupsResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: ListBackupsResultStatusEnum | string): ListBackupsResult {
        this['status'] = status;
        return this;
    }
    public withSize(size: number): ListBackupsResult {
        this['size'] = size;
        return this;
    }
    public withType(type: ListBackupsResultTypeEnum | string): ListBackupsResult {
        this['type'] = type;
        return this;
    }
    public withDatastore(datastore: DatastoreResult): ListBackupsResult {
        this['datastore'] = datastore;
        return this;
    }
    public withInstanceId(instanceId: string): ListBackupsResult {
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
export enum ListBackupsResultStatusEnum {
    BUILDING = 'BUILDING：备份中。',
    COMPLETED = 'COMPLETED：备份完成。',
    FAILED = 'FAILED：备份失败。。'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBackupsResultTypeEnum {
    AUTO = 'auto：自动全量备份。',
    MANUAL = 'manual：手动全量备份。'
}
