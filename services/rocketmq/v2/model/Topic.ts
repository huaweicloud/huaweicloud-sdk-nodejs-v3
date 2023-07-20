import { TopicBrokers } from './TopicBrokers';


export class Topic {
    public name?: string;
    private 'total_read_queue_num'?: number;
    private 'total_write_queue_num'?: number;
    public permission?: TopicPermissionEnum | string;
    public brokers?: Array<TopicBrokers>;
    public constructor() { 
    }
    public withName(name: string): Topic {
        this['name'] = name;
        return this;
    }
    public withTotalReadQueueNum(totalReadQueueNum: number): Topic {
        this['total_read_queue_num'] = totalReadQueueNum;
        return this;
    }
    public set totalReadQueueNum(totalReadQueueNum: number  | undefined) {
        this['total_read_queue_num'] = totalReadQueueNum;
    }
    public get totalReadQueueNum(): number | undefined {
        return this['total_read_queue_num'];
    }
    public withTotalWriteQueueNum(totalWriteQueueNum: number): Topic {
        this['total_write_queue_num'] = totalWriteQueueNum;
        return this;
    }
    public set totalWriteQueueNum(totalWriteQueueNum: number  | undefined) {
        this['total_write_queue_num'] = totalWriteQueueNum;
    }
    public get totalWriteQueueNum(): number | undefined {
        return this['total_write_queue_num'];
    }
    public withPermission(permission: TopicPermissionEnum | string): Topic {
        this['permission'] = permission;
        return this;
    }
    public withBrokers(brokers: Array<TopicBrokers>): Topic {
        this['brokers'] = brokers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TopicPermissionEnum {
    SUB = 'sub',
    PUB = 'pub',
    ALL = 'all'
}
