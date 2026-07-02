import { StartKafkaLogTaskReq } from './StartKafkaLogTaskReq';


export class StartKafkaLogTaskRequest {
    private 'instance_id'?: string;
    private 'log_type'?: StartKafkaLogTaskRequestLogTypeEnum | string;
    public body?: StartKafkaLogTaskReq;
    public constructor(instanceId?: string, logType?: string) { 
        this['instance_id'] = instanceId;
        this['log_type'] = logType;
    }
    public withInstanceId(instanceId: string): StartKafkaLogTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogType(logType: StartKafkaLogTaskRequestLogTypeEnum | string): StartKafkaLogTaskRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: StartKafkaLogTaskRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): StartKafkaLogTaskRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withBody(body: StartKafkaLogTaskReq): StartKafkaLogTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartKafkaLogTaskRequestLogTypeEnum {
    REBALANCE = 'REBALANCE',
    TOPIC_LOG = 'topic_log'
}
