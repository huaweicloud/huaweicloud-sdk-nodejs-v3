import { TopicBrokers } from './TopicBrokers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOneTopicResponse extends SdkResponse {
    public name?: string;
    private 'total_read_queue_num'?: number;
    private 'total_write_queue_num'?: number;
    public permission?: ShowOneTopicResponsePermissionEnum | string;
    public brokers?: Array<TopicBrokers>;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowOneTopicResponse {
        this['name'] = name;
        return this;
    }
    public withTotalReadQueueNum(totalReadQueueNum: number): ShowOneTopicResponse {
        this['total_read_queue_num'] = totalReadQueueNum;
        return this;
    }
    public set totalReadQueueNum(totalReadQueueNum: number  | undefined) {
        this['total_read_queue_num'] = totalReadQueueNum;
    }
    public get totalReadQueueNum(): number | undefined {
        return this['total_read_queue_num'];
    }
    public withTotalWriteQueueNum(totalWriteQueueNum: number): ShowOneTopicResponse {
        this['total_write_queue_num'] = totalWriteQueueNum;
        return this;
    }
    public set totalWriteQueueNum(totalWriteQueueNum: number  | undefined) {
        this['total_write_queue_num'] = totalWriteQueueNum;
    }
    public get totalWriteQueueNum(): number | undefined {
        return this['total_write_queue_num'];
    }
    public withPermission(permission: ShowOneTopicResponsePermissionEnum | string): ShowOneTopicResponse {
        this['permission'] = permission;
        return this;
    }
    public withBrokers(brokers: Array<TopicBrokers>): ShowOneTopicResponse {
        this['brokers'] = brokers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowOneTopicResponsePermissionEnum {
    SUB = 'sub',
    PUB = 'pub',
    ALL = 'all'
}
