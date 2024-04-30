

export class CreateTopicReqQueues {
    public broker?: string;
    private 'queue_num'?: number;
    public constructor() { 
    }
    public withBroker(broker: string): CreateTopicReqQueues {
        this['broker'] = broker;
        return this;
    }
    public withQueueNum(queueNum: number): CreateTopicReqQueues {
        this['queue_num'] = queueNum;
        return this;
    }
    public set queueNum(queueNum: number  | undefined) {
        this['queue_num'] = queueNum;
    }
    public get queueNum(): number | undefined {
        return this['queue_num'];
    }
}