

export class IpStatusDetail {
    private 'block_time'?: number;
    private 'unblock_time'?: number;
    public constructor(blockTime?: number, unblockTime?: number) { 
        this['block_time'] = blockTime;
        this['unblock_time'] = unblockTime;
    }
    public withBlockTime(blockTime: number): IpStatusDetail {
        this['block_time'] = blockTime;
        return this;
    }
    public set blockTime(blockTime: number  | undefined) {
        this['block_time'] = blockTime;
    }
    public get blockTime(): number | undefined {
        return this['block_time'];
    }
    public withUnblockTime(unblockTime: number): IpStatusDetail {
        this['unblock_time'] = unblockTime;
        return this;
    }
    public set unblockTime(unblockTime: number  | undefined) {
        this['unblock_time'] = unblockTime;
    }
    public get unblockTime(): number | undefined {
        return this['unblock_time'];
    }
}