

export class BatchUnprotectInstancesOption {
    private 'instances_id'?: Array<string>;
    private 'instance_delete'?: BatchUnprotectInstancesOptionInstanceDeleteEnum | string;
    public action?: BatchUnprotectInstancesOptionActionEnum | string;
    private 'instance_append'?: BatchUnprotectInstancesOptionInstanceAppendEnum | string;
    public constructor(instancesId?: Array<string>, action?: string) { 
        this['instances_id'] = instancesId;
        this['action'] = action;
    }
    public withInstancesId(instancesId: Array<string>): BatchUnprotectInstancesOption {
        this['instances_id'] = instancesId;
        return this;
    }
    public set instancesId(instancesId: Array<string>  | undefined) {
        this['instances_id'] = instancesId;
    }
    public get instancesId(): Array<string> | undefined {
        return this['instances_id'];
    }
    public withInstanceDelete(instanceDelete: BatchUnprotectInstancesOptionInstanceDeleteEnum | string): BatchUnprotectInstancesOption {
        this['instance_delete'] = instanceDelete;
        return this;
    }
    public set instanceDelete(instanceDelete: BatchUnprotectInstancesOptionInstanceDeleteEnum | string  | undefined) {
        this['instance_delete'] = instanceDelete;
    }
    public get instanceDelete(): BatchUnprotectInstancesOptionInstanceDeleteEnum | string | undefined {
        return this['instance_delete'];
    }
    public withAction(action: BatchUnprotectInstancesOptionActionEnum | string): BatchUnprotectInstancesOption {
        this['action'] = action;
        return this;
    }
    public withInstanceAppend(instanceAppend: BatchUnprotectInstancesOptionInstanceAppendEnum | string): BatchUnprotectInstancesOption {
        this['instance_append'] = instanceAppend;
        return this;
    }
    public set instanceAppend(instanceAppend: BatchUnprotectInstancesOptionInstanceAppendEnum | string  | undefined) {
        this['instance_append'] = instanceAppend;
    }
    public get instanceAppend(): BatchUnprotectInstancesOptionInstanceAppendEnum | string | undefined {
        return this['instance_append'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUnprotectInstancesOptionInstanceDeleteEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchUnprotectInstancesOptionActionEnum {
    UNPROTECT = 'UNPROTECT'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchUnprotectInstancesOptionInstanceAppendEnum {
    NO = 'no',
    YES = 'yes'
}
