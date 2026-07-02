

export class ShowKafkaLogTaskRequest {
    private 'instance_id'?: string;
    private 'log_type'?: ShowKafkaLogTaskRequestLogTypeEnum | string;
    public constructor(instanceId?: string, logType?: string) { 
        this['instance_id'] = instanceId;
        this['log_type'] = logType;
    }
    public withInstanceId(instanceId: string): ShowKafkaLogTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogType(logType: ShowKafkaLogTaskRequestLogTypeEnum | string): ShowKafkaLogTaskRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ShowKafkaLogTaskRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ShowKafkaLogTaskRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowKafkaLogTaskRequestLogTypeEnum {
    REBALANCE = 'REBALANCE',
    TOPIC_LOG = 'topic_log'
}
