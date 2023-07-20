import { OpenGaussDatastore } from './OpenGaussDatastore';


export class Backups {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: BackupsStatusEnum | string;
    public size?: number;
    public type?: BackupsTypeEnum | string;
    public datastore?: OpenGaussDatastore;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withId(id: string): Backups {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Backups {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Backups {
        this['description'] = description;
        return this;
    }
    public withBeginTime(beginTime: string): Backups {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): Backups {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: BackupsStatusEnum | string): Backups {
        this['status'] = status;
        return this;
    }
    public withSize(size: number): Backups {
        this['size'] = size;
        return this;
    }
    public withType(type: BackupsTypeEnum | string): Backups {
        this['type'] = type;
        return this;
    }
    public withDatastore(datastore: OpenGaussDatastore): Backups {
        this['datastore'] = datastore;
        return this;
    }
    public withInstanceId(instanceId: string): Backups {
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
export enum BackupsStatusEnum {
    BUILDING = 'BUILDING：备份中。',
    COMPLETED = 'COMPLETED：备份完成。',
    FAILED = 'FAILED：备份失败。。'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupsTypeEnum {
    AUTO = 'auto：自动全量备份。',
    MANUAL = 'manual：手动全量备份。'
}
