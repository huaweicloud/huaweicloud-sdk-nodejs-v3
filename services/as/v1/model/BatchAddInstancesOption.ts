

export class BatchAddInstancesOption {
    private 'instances_id'?: Array<string>;
    private 'instance_delete'?: BatchAddInstancesOptionInstanceDeleteEnum | string;
    public action?: BatchAddInstancesOptionActionEnum | string;
    private 'instance_append'?: BatchAddInstancesOptionInstanceAppendEnum | string;
    public constructor(instancesId?: Array<string>, action?: string) { 
        this['instances_id'] = instancesId;
        this['action'] = action;
    }
    public withInstancesId(instancesId: Array<string>): BatchAddInstancesOption {
        this['instances_id'] = instancesId;
        return this;
    }
    public set instancesId(instancesId: Array<string>  | undefined) {
        this['instances_id'] = instancesId;
    }
    public get instancesId(): Array<string> | undefined {
        return this['instances_id'];
    }
    public withInstanceDelete(instanceDelete: BatchAddInstancesOptionInstanceDeleteEnum | string): BatchAddInstancesOption {
        this['instance_delete'] = instanceDelete;
        return this;
    }
    public set instanceDelete(instanceDelete: BatchAddInstancesOptionInstanceDeleteEnum | string  | undefined) {
        this['instance_delete'] = instanceDelete;
    }
    public get instanceDelete(): BatchAddInstancesOptionInstanceDeleteEnum | string | undefined {
        return this['instance_delete'];
    }
    public withAction(action: BatchAddInstancesOptionActionEnum | string): BatchAddInstancesOption {
        this['action'] = action;
        return this;
    }
    public withInstanceAppend(instanceAppend: BatchAddInstancesOptionInstanceAppendEnum | string): BatchAddInstancesOption {
        this['instance_append'] = instanceAppend;
        return this;
    }
    public set instanceAppend(instanceAppend: BatchAddInstancesOptionInstanceAppendEnum | string  | undefined) {
        this['instance_append'] = instanceAppend;
    }
    public get instanceAppend(): BatchAddInstancesOptionInstanceAppendEnum | string | undefined {
        return this['instance_append'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchAddInstancesOptionInstanceDeleteEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchAddInstancesOptionActionEnum {
    ADD = 'ADD'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchAddInstancesOptionInstanceAppendEnum {
    NO = 'no',
    YES = 'yes'
}
