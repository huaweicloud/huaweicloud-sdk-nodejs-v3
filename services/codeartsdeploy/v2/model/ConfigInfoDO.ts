import { ParamTypeLimits } from './ParamTypeLimits';


export class ConfigInfoDO {
    public name?: string;
    public type?: ConfigInfoDOTypeEnum;
    public description?: string;
    public value?: string;
    private 'task_id'?: string | undefined;
    private 'static_status'?: ConfigInfoDOStaticStatusEnum | undefined;
    public limits?: Array<ParamTypeLimits>;
    public constructor() { 
    }
    public withName(name: string): ConfigInfoDO {
        this['name'] = name;
        return this;
    }
    public withType(type: ConfigInfoDOTypeEnum): ConfigInfoDO {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ConfigInfoDO {
        this['description'] = description;
        return this;
    }
    public withValue(value: string): ConfigInfoDO {
        this['value'] = value;
        return this;
    }
    public withTaskId(taskId: string): ConfigInfoDO {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStaticStatus(staticStatus: ConfigInfoDOStaticStatusEnum): ConfigInfoDO {
        this['static_status'] = staticStatus;
        return this;
    }
    public set staticStatus(staticStatus: ConfigInfoDOStaticStatusEnum | undefined) {
        this['static_status'] = staticStatus;
    }
    public get staticStatus() {
        return this['static_status'];
    }
    public withLimits(limits: Array<ParamTypeLimits>): ConfigInfoDO {
        this['limits'] = limits;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigInfoDOTypeEnum {
    TEXT = 'text',
    HOST_GROUP = 'host_group',
    ENUM = 'enum',
    ENCRYPT = 'encrypt'
}
/**
    * @export
    * @enum {string}
    */
export enum ConfigInfoDOStaticStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
