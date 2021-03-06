

export class AmqpForwarding {
    private 'queue_name': string | undefined;
    public constructor(queueName?: any) { 
        this['queue_name'] = queueName;
    }
    public withQueueName(queueName: string): AmqpForwarding {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName() {
        return this['queue_name'];
    }
}