

export class UpdateTopicQueueEntity {
    public broker?: string;
    private 'read_queue_num'?: number;
    private 'write_queue_num'?: number;
    public constructor() { 
    }
    public withBroker(broker: string): UpdateTopicQueueEntity {
        this['broker'] = broker;
        return this;
    }
    public withReadQueueNum(readQueueNum: number): UpdateTopicQueueEntity {
        this['read_queue_num'] = readQueueNum;
        return this;
    }
    public set readQueueNum(readQueueNum: number  | undefined) {
        this['read_queue_num'] = readQueueNum;
    }
    public get readQueueNum(): number | undefined {
        return this['read_queue_num'];
    }
    public withWriteQueueNum(writeQueueNum: number): UpdateTopicQueueEntity {
        this['write_queue_num'] = writeQueueNum;
        return this;
    }
    public set writeQueueNum(writeQueueNum: number  | undefined) {
        this['write_queue_num'] = writeQueueNum;
    }
    public get writeQueueNum(): number | undefined {
        return this['write_queue_num'];
    }
}