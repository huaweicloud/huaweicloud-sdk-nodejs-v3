

export class TopicBrokers {
    private 'broker_name'?: string | undefined;
    private 'read_queue_num'?: number | undefined;
    private 'write_queue_num'?: number | undefined;
    public constructor() { 
    }
    public withBrokerName(brokerName: string): TopicBrokers {
        this['broker_name'] = brokerName;
        return this;
    }
    public set brokerName(brokerName: string | undefined) {
        this['broker_name'] = brokerName;
    }
    public get brokerName() {
        return this['broker_name'];
    }
    public withReadQueueNum(readQueueNum: number): TopicBrokers {
        this['read_queue_num'] = readQueueNum;
        return this;
    }
    public set readQueueNum(readQueueNum: number | undefined) {
        this['read_queue_num'] = readQueueNum;
    }
    public get readQueueNum() {
        return this['read_queue_num'];
    }
    public withWriteQueueNum(writeQueueNum: number): TopicBrokers {
        this['write_queue_num'] = writeQueueNum;
        return this;
    }
    public set writeQueueNum(writeQueueNum: number | undefined) {
        this['write_queue_num'] = writeQueueNum;
    }
    public get writeQueueNum() {
        return this['write_queue_num'];
    }
}