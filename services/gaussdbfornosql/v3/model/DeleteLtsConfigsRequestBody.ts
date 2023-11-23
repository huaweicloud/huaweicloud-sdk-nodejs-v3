

export class DeleteLtsConfigsRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'log_type'?: DeleteLtsConfigsRequestBodyLogTypeEnum | string;
    public constructor(instanceIds?: Array<string>, logType?: string) { 
        this['instance_ids'] = instanceIds;
        this['log_type'] = logType;
    }
    public withInstanceIds(instanceIds: Array<string>): DeleteLtsConfigsRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withLogType(logType: DeleteLtsConfigsRequestBodyLogTypeEnum | string): DeleteLtsConfigsRequestBody {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: DeleteLtsConfigsRequestBodyLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): DeleteLtsConfigsRequestBodyLogTypeEnum | string | undefined {
        return this['log_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteLtsConfigsRequestBodyLogTypeEnum {
    SLOW_LOG = 'slow_log'
}
