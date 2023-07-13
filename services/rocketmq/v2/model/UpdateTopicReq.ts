

export class UpdateTopicReq {
    private 'read_queue_num'?: number | undefined;
    private 'write_queue_num'?: number | undefined;
    public permission?: UpdateTopicReqPermissionEnum;
    public constructor() { 
    }
    public withReadQueueNum(readQueueNum: number): UpdateTopicReq {
        this['read_queue_num'] = readQueueNum;
        return this;
    }
    public set readQueueNum(readQueueNum: number | undefined) {
        this['read_queue_num'] = readQueueNum;
    }
    public get readQueueNum() {
        return this['read_queue_num'];
    }
    public withWriteQueueNum(writeQueueNum: number): UpdateTopicReq {
        this['write_queue_num'] = writeQueueNum;
        return this;
    }
    public set writeQueueNum(writeQueueNum: number | undefined) {
        this['write_queue_num'] = writeQueueNum;
    }
    public get writeQueueNum() {
        return this['write_queue_num'];
    }
    public withPermission(permission: UpdateTopicReqPermissionEnum): UpdateTopicReq {
        this['permission'] = permission;
        return this;
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
