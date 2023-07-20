

export class BatchRemoveInstancesOption {
    private 'instances_id'?: Array<string>;
    private 'instance_delete'?: BatchRemoveInstancesOptionInstanceDeleteEnum | string;
    public action?: BatchRemoveInstancesOptionActionEnum | string;
    private 'instance_append'?: BatchRemoveInstancesOptionInstanceAppendEnum | string;
    public constructor(instancesId?: Array<string>, action?: string) { 
        this['instances_id'] = instancesId;
        this['action'] = action;
    }
    public withInstancesId(instancesId: Array<string>): BatchRemoveInstancesOption {
        this['instances_id'] = instancesId;
        return this;
    }
    public set instancesId(instancesId: Array<string>  | undefined) {
        this['instances_id'] = instancesId;
    }
    public get instancesId(): Array<string> | undefined {
        return this['instances_id'];
    }
    public withInstanceDelete(instanceDelete: BatchRemoveInstancesOptionInstanceDeleteEnum | string): BatchRemoveInstancesOption {
        this['instance_delete'] = instanceDelete;
        return this;
    }
    public set instanceDelete(instanceDelete: BatchRemoveInstancesOptionInstanceDeleteEnum | string  | undefined) {
        this['instance_delete'] = instanceDelete;
    }
    public get instanceDelete(): BatchRemoveInstancesOptionInstanceDeleteEnum | string | undefined {
        return this['instance_delete'];
    }
    public withAction(action: BatchRemoveInstancesOptionActionEnum | string): BatchRemoveInstancesOption {
        this['action'] = action;
        return this;
    }
    public withInstanceAppend(instanceAppend: BatchRemoveInstancesOptionInstanceAppendEnum | string): BatchRemoveInstancesOption {
        this['instance_append'] = instanceAppend;
        return this;
    }
    public set instanceAppend(instanceAppend: BatchRemoveInstancesOptionInstanceAppendEnum | string  | undefined) {
        this['instance_append'] = instanceAppend;
    }
    public get instanceAppend(): BatchRemoveInstancesOptionInstanceAppendEnum | string | undefined {
        return this['instance_append'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchRemoveInstancesOptionInstanceDeleteEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchRemoveInstancesOptionActionEnum {
    REMOVE = 'REMOVE'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchRemoveInstancesOptionInstanceAppendEnum {
    NO = 'no',
    YES = 'yes'
}
