

export class UnblockRecordResponseUnblockRecord {
    public ip?: string;
    public executor?: string;
    private 'block_id'?: number;
    private 'blocking_time'?: number;
    private 'unblocking_time'?: number;
    private 'unblock_type'?: UnblockRecordResponseUnblockRecordUnblockTypeEnum | string;
    public status?: UnblockRecordResponseUnblockRecordStatusEnum | string;
    private 'sort_time'?: number;
    public constructor() { 
    }
    public withIp(ip: string): UnblockRecordResponseUnblockRecord {
        this['ip'] = ip;
        return this;
    }
    public withExecutor(executor: string): UnblockRecordResponseUnblockRecord {
        this['executor'] = executor;
        return this;
    }
    public withBlockId(blockId: number): UnblockRecordResponseUnblockRecord {
        this['block_id'] = blockId;
        return this;
    }
    public set blockId(blockId: number  | undefined) {
        this['block_id'] = blockId;
    }
    public get blockId(): number | undefined {
        return this['block_id'];
    }
    public withBlockingTime(blockingTime: number): UnblockRecordResponseUnblockRecord {
        this['blocking_time'] = blockingTime;
        return this;
    }
    public set blockingTime(blockingTime: number  | undefined) {
        this['blocking_time'] = blockingTime;
    }
    public get blockingTime(): number | undefined {
        return this['blocking_time'];
    }
    public withUnblockingTime(unblockingTime: number): UnblockRecordResponseUnblockRecord {
        this['unblocking_time'] = unblockingTime;
        return this;
    }
    public set unblockingTime(unblockingTime: number  | undefined) {
        this['unblocking_time'] = unblockingTime;
    }
    public get unblockingTime(): number | undefined {
        return this['unblocking_time'];
    }
    public withUnblockType(unblockType: UnblockRecordResponseUnblockRecordUnblockTypeEnum | string): UnblockRecordResponseUnblockRecord {
        this['unblock_type'] = unblockType;
        return this;
    }
    public set unblockType(unblockType: UnblockRecordResponseUnblockRecordUnblockTypeEnum | string  | undefined) {
        this['unblock_type'] = unblockType;
    }
    public get unblockType(): UnblockRecordResponseUnblockRecordUnblockTypeEnum | string | undefined {
        return this['unblock_type'];
    }
    public withStatus(status: UnblockRecordResponseUnblockRecordStatusEnum | string): UnblockRecordResponseUnblockRecord {
        this['status'] = status;
        return this;
    }
    public withSortTime(sortTime: number): UnblockRecordResponseUnblockRecord {
        this['sort_time'] = sortTime;
        return this;
    }
    public set sortTime(sortTime: number  | undefined) {
        this['sort_time'] = sortTime;
    }
    public get sortTime(): number | undefined {
        return this['sort_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UnblockRecordResponseUnblockRecordUnblockTypeEnum {
    MANUAL = 'manual',
    AUTOMATIC = 'automatic'
}
/**
    * @export
    * @enum {string}
    */
export enum UnblockRecordResponseUnblockRecordStatusEnum {
    UNBLOCKING = 'unblocking',
    SUCCESS = 'success',
    FAILED = 'failed'
}
