

export class BatchEnterStandbyInstancesOption {
    private 'instances_id'?: Array<string>;
    private 'instance_delete'?: BatchEnterStandbyInstancesOptionInstanceDeleteEnum | string;
    public action?: BatchEnterStandbyInstancesOptionActionEnum | string;
    private 'instance_append'?: BatchEnterStandbyInstancesOptionInstanceAppendEnum | string;
    public constructor(instancesId?: Array<string>, action?: string) { 
        this['instances_id'] = instancesId;
        this['action'] = action;
    }
    public withInstancesId(instancesId: Array<string>): BatchEnterStandbyInstancesOption {
        this['instances_id'] = instancesId;
        return this;
    }
    public set instancesId(instancesId: Array<string>  | undefined) {
        this['instances_id'] = instancesId;
    }
    public get instancesId(): Array<string> | undefined {
        return this['instances_id'];
    }
    public withInstanceDelete(instanceDelete: BatchEnterStandbyInstancesOptionInstanceDeleteEnum | string): BatchEnterStandbyInstancesOption {
        this['instance_delete'] = instanceDelete;
        return this;
    }
    public set instanceDelete(instanceDelete: BatchEnterStandbyInstancesOptionInstanceDeleteEnum | string  | undefined) {
        this['instance_delete'] = instanceDelete;
    }
    public get instanceDelete(): BatchEnterStandbyInstancesOptionInstanceDeleteEnum | string | undefined {
        return this['instance_delete'];
    }
    public withAction(action: BatchEnterStandbyInstancesOptionActionEnum | string): BatchEnterStandbyInstancesOption {
        this['action'] = action;
        return this;
    }
    public withInstanceAppend(instanceAppend: BatchEnterStandbyInstancesOptionInstanceAppendEnum | string): BatchEnterStandbyInstancesOption {
        this['instance_append'] = instanceAppend;
        return this;
    }
    public set instanceAppend(instanceAppend: BatchEnterStandbyInstancesOptionInstanceAppendEnum | string  | undefined) {
        this['instance_append'] = instanceAppend;
    }
    public get instanceAppend(): BatchEnterStandbyInstancesOptionInstanceAppendEnum | string | undefined {
        return this['instance_append'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchEnterStandbyInstancesOptionInstanceDeleteEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchEnterStandbyInstancesOptionActionEnum {
    ENTER_STANDBY = 'ENTER_STANDBY'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchEnterStandbyInstancesOptionInstanceAppendEnum {
    NO = 'no',
    YES = 'yes'
}
