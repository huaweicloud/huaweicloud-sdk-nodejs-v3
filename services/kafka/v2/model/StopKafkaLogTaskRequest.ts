

export class StopKafkaLogTaskRequest {
    private 'instance_id'?: string;
    private 'log_type'?: StopKafkaLogTaskRequestLogTypeEnum | string;
    public constructor(instanceId?: string, logType?: string) { 
        this['instance_id'] = instanceId;
        this['log_type'] = logType;
    }
    public withInstanceId(instanceId: string): StopKafkaLogTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogType(logType: StopKafkaLogTaskRequestLogTypeEnum | string): StopKafkaLogTaskRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: StopKafkaLogTaskRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): StopKafkaLogTaskRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StopKafkaLogTaskRequestLogTypeEnum {
    REBALANCE = 'REBALANCE',
    TOPIC_LOG = 'topic_log'
}
