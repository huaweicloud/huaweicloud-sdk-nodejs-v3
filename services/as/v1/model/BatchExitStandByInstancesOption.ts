

export class BatchExitStandByInstancesOption {
    private 'instances_id'?: Array<string>;
    private 'instance_delete'?: BatchExitStandByInstancesOptionInstanceDeleteEnum | string;
    public action?: BatchExitStandByInstancesOptionActionEnum | string;
    private 'instance_append'?: BatchExitStandByInstancesOptionInstanceAppendEnum | string;
    public constructor(instancesId?: Array<string>, action?: string) { 
        this['instances_id'] = instancesId;
        this['action'] = action;
    }
    public withInstancesId(instancesId: Array<string>): BatchExitStandByInstancesOption {
        this['instances_id'] = instancesId;
        return this;
    }
    public set instancesId(instancesId: Array<string>  | undefined) {
        this['instances_id'] = instancesId;
    }
    public get instancesId(): Array<string> | undefined {
        return this['instances_id'];
    }
    public withInstanceDelete(instanceDelete: BatchExitStandByInstancesOptionInstanceDeleteEnum | string): BatchExitStandByInstancesOption {
        this['instance_delete'] = instanceDelete;
        return this;
    }
    public set instanceDelete(instanceDelete: BatchExitStandByInstancesOptionInstanceDeleteEnum | string  | undefined) {
        this['instance_delete'] = instanceDelete;
    }
    public get instanceDelete(): BatchExitStandByInstancesOptionInstanceDeleteEnum | string | undefined {
        return this['instance_delete'];
    }
    public withAction(action: BatchExitStandByInstancesOptionActionEnum | string): BatchExitStandByInstancesOption {
        this['action'] = action;
        return this;
    }
    public withInstanceAppend(instanceAppend: BatchExitStandByInstancesOptionInstanceAppendEnum | string): BatchExitStandByInstancesOption {
        this['instance_append'] = instanceAppend;
        return this;
    }
    public set instanceAppend(instanceAppend: BatchExitStandByInstancesOptionInstanceAppendEnum | string  | undefined) {
        this['instance_append'] = instanceAppend;
    }
    public get instanceAppend(): BatchExitStandByInstancesOptionInstanceAppendEnum | string | undefined {
        return this['instance_append'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchExitStandByInstancesOptionInstanceDeleteEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchExitStandByInstancesOptionActionEnum {
    EXIT_STANDBY = 'EXIT_STANDBY'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchExitStandByInstancesOptionInstanceAppendEnum {
    NO = 'no',
    YES = 'yes'
}
