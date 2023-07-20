

export class CreateTopicReq {
    public name?: string;
    public brokers?: Array<string>;
    private 'queue_num'?: number;
    public permission?: CreateTopicReqPermissionEnum | string;
    public constructor() { 
    }
    public withName(name: string): CreateTopicReq {
        this['name'] = name;
        return this;
    }
    public withBrokers(brokers: Array<string>): CreateTopicReq {
        this['brokers'] = brokers;
        return this;
    }
    public withQueueNum(queueNum: number): CreateTopicReq {
        this['queue_num'] = queueNum;
        return this;
    }
    public set queueNum(queueNum: number  | undefined) {
        this['queue_num'] = queueNum;
    }
    public get queueNum(): number | undefined {
        return this['queue_num'];
    }
    public withPermission(permission: CreateTopicReqPermissionEnum | string): CreateTopicReq {
        this['permission'] = permission;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTopicReqPermissionEnum {
    SUB = 'sub',
    PUB = 'pub',
    ALL = 'all'
}
