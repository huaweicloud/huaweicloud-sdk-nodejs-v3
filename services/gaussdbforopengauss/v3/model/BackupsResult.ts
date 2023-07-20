import { OpenGaussDatastoreResult } from './OpenGaussDatastoreResult';


export class BackupsResult {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: BackupsResultStatusEnum | string;
    public size?: number;
    public type?: BackupsResultTypeEnum | string;
    public datastore?: OpenGaussDatastoreResult;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withId(id: string): BackupsResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BackupsResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): BackupsResult {
        this['description'] = description;
        return this;
    }
    public withBeginTime(beginTime: string): BackupsResult {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): BackupsResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: BackupsResultStatusEnum | string): BackupsResult {
        this['status'] = status;
        return this;
    }
    public withSize(size: number): BackupsResult {
        this['size'] = size;
        return this;
    }
    public withType(type: BackupsResultTypeEnum | string): BackupsResult {
        this['type'] = type;
        return this;
    }
    public withDatastore(datastore: OpenGaussDatastoreResult): BackupsResult {
        this['datastore'] = datastore;
        return this;
    }
    public withInstanceId(instanceId: string): BackupsResult {
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
export enum BackupsResultStatusEnum {
    BUILDING = 'BUILDING：备份中。',
    COMPLETED = 'COMPLETED：备份完成。',
    FAILED = 'FAILED：备份失败。。'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupsResultTypeEnum {
    AUTO = 'auto：自动全量备份。',
    MANUAL = 'manual：手动全量备份。'
}
