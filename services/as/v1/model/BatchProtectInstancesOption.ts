

export class BatchProtectInstancesOption {
    private 'instances_id'?: Array<string>;
    private 'instance_delete'?: BatchProtectInstancesOptionInstanceDeleteEnum | string;
    public action?: BatchProtectInstancesOptionActionEnum | string;
    private 'instance_append'?: BatchProtectInstancesOptionInstanceAppendEnum | string;
    public constructor(instancesId?: Array<string>, action?: string) { 
        this['instances_id'] = instancesId;
        this['action'] = action;
    }
    public withInstancesId(instancesId: Array<string>): BatchProtectInstancesOption {
        this['instances_id'] = instancesId;
        return this;
    }
    public set instancesId(instancesId: Array<string>  | undefined) {
        this['instances_id'] = instancesId;
    }
    public get instancesId(): Array<string> | undefined {
        return this['instances_id'];
    }
    public withInstanceDelete(instanceDelete: BatchProtectInstancesOptionInstanceDeleteEnum | string): BatchProtectInstancesOption {
        this['instance_delete'] = instanceDelete;
        return this;
    }
    public set instanceDelete(instanceDelete: BatchProtectInstancesOptionInstanceDeleteEnum | string  | undefined) {
        this['instance_delete'] = instanceDelete;
    }
    public get instanceDelete(): BatchProtectInstancesOptionInstanceDeleteEnum | string | undefined {
        return this['instance_delete'];
    }
    public withAction(action: BatchProtectInstancesOptionActionEnum | string): BatchProtectInstancesOption {
        this['action'] = action;
        return this;
    }
    public withInstanceAppend(instanceAppend: BatchProtectInstancesOptionInstanceAppendEnum | string): BatchProtectInstancesOption {
        this['instance_append'] = instanceAppend;
        return this;
    }
    public set instanceAppend(instanceAppend: BatchProtectInstancesOptionInstanceAppendEnum | string  | undefined) {
        this['instance_append'] = instanceAppend;
    }
    public get instanceAppend(): BatchProtectInstancesOptionInstanceAppendEnum | string | undefined {
        return this['instance_append'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchProtectInstancesOptionInstanceDeleteEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchProtectInstancesOptionActionEnum {
    PROTECT = 'PROTECT'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchProtectInstancesOptionInstanceAppendEnum {
    NO = 'no',
    YES = 'yes'
}
