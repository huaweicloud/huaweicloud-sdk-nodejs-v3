import { UpdateTopicQueueEntity } from './UpdateTopicQueueEntity';


export class UpdateTopicReq {
    private 'read_queue_num'?: number;
    private 'write_queue_num'?: number;
    public permission?: UpdateTopicReqPermissionEnum | string;
    public queues?: Array<UpdateTopicQueueEntity>;
    private 'topic_desc'?: string;
    public constructor() { 
    }
    public withReadQueueNum(readQueueNum: number): UpdateTopicReq {
        this['read_queue_num'] = readQueueNum;
        return this;
    }
    public set readQueueNum(readQueueNum: number  | undefined) {
        this['read_queue_num'] = readQueueNum;
    }
    public get readQueueNum(): number | undefined {
        return this['read_queue_num'];
    }
    public withWriteQueueNum(writeQueueNum: number): UpdateTopicReq {
        this['write_queue_num'] = writeQueueNum;
        return this;
    }
    public set writeQueueNum(writeQueueNum: number  | undefined) {
        this['write_queue_num'] = writeQueueNum;
    }
    public get writeQueueNum(): number | undefined {
        return this['write_queue_num'];
    }
    public withPermission(permission: UpdateTopicReqPermissionEnum | string): UpdateTopicReq {
        this['permission'] = permission;
        return this;
    }
    public withQueues(queues: Array<UpdateTopicQueueEntity>): UpdateTopicReq {
        this['queues'] = queues;
        return this;
    }
    public withTopicDesc(topicDesc: string): UpdateTopicReq {
        this['topic_desc'] = topicDesc;
        return this;
    }
    public set topicDesc(topicDesc: string  | undefined) {
        this['topic_desc'] = topicDesc;
    }
    public get topicDesc(): string | undefined {
        return this['topic_desc'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTopicReqPermissionEnum {
    SUB = 'sub',
    PUB = 'pub',
    ALL = 'all'
}
