

export class BlockListBlockingList {
    public ip?: string;
    private 'blocking_time'?: number;
    private 'estimated_unblocking_time'?: number;
    public status?: BlockListBlockingListStatusEnum | string;
    public constructor(ip?: string, blockingTime?: number, estimatedUnblockingTime?: number, status?: string) { 
        this['ip'] = ip;
        this['blocking_time'] = blockingTime;
        this['estimated_unblocking_time'] = estimatedUnblockingTime;
        this['status'] = status;
    }
    public withIp(ip: string): BlockListBlockingList {
        this['ip'] = ip;
        return this;
    }
    public withBlockingTime(blockingTime: number): BlockListBlockingList {
        this['blocking_time'] = blockingTime;
        return this;
    }
    public set blockingTime(blockingTime: number  | undefined) {
        this['blocking_time'] = blockingTime;
    }
    public get blockingTime(): number | undefined {
        return this['blocking_time'];
    }
    public withEstimatedUnblockingTime(estimatedUnblockingTime: number): BlockListBlockingList {
        this['estimated_unblocking_time'] = estimatedUnblockingTime;
        return this;
    }
    public set estimatedUnblockingTime(estimatedUnblockingTime: number  | undefined) {
        this['estimated_unblocking_time'] = estimatedUnblockingTime;
    }
    public get estimatedUnblockingTime(): number | undefined {
        return this['estimated_unblocking_time'];
    }
    public withStatus(status: BlockListBlockingListStatusEnum | string): BlockListBlockingList {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BlockListBlockingListStatusEnum {
    FAILED = 'failed',
    SUCCESS = 'success',
    UNBLOCKING = 'unblocking'
}
