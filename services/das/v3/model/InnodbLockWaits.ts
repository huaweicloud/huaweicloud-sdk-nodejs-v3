

export class InnodbLockWaits {
    private 'requesting_trx_id'?: string;
    private 'requested_lock_id'?: string;
    private 'blocking_trx_id'?: string;
    private 'blocking_lock_id'?: string;
    public constructor(requestingTrxId?: string, requestedLockId?: string, blockingTrxId?: string, blockingLockId?: string) { 
        this['requesting_trx_id'] = requestingTrxId;
        this['requested_lock_id'] = requestedLockId;
        this['blocking_trx_id'] = blockingTrxId;
        this['blocking_lock_id'] = blockingLockId;
    }
    public withRequestingTrxId(requestingTrxId: string): InnodbLockWaits {
        this['requesting_trx_id'] = requestingTrxId;
        return this;
    }
    public set requestingTrxId(requestingTrxId: string  | undefined) {
        this['requesting_trx_id'] = requestingTrxId;
    }
    public get requestingTrxId(): string | undefined {
        return this['requesting_trx_id'];
    }
    public withRequestedLockId(requestedLockId: string): InnodbLockWaits {
        this['requested_lock_id'] = requestedLockId;
        return this;
    }
    public set requestedLockId(requestedLockId: string  | undefined) {
        this['requested_lock_id'] = requestedLockId;
    }
    public get requestedLockId(): string | undefined {
        return this['requested_lock_id'];
    }
    public withBlockingTrxId(blockingTrxId: string): InnodbLockWaits {
        this['blocking_trx_id'] = blockingTrxId;
        return this;
    }
    public set blockingTrxId(blockingTrxId: string  | undefined) {
        this['blocking_trx_id'] = blockingTrxId;
    }
    public get blockingTrxId(): string | undefined {
        return this['blocking_trx_id'];
    }
    public withBlockingLockId(blockingLockId: string): InnodbLockWaits {
        this['blocking_lock_id'] = blockingLockId;
        return this;
    }
    public set blockingLockId(blockingLockId: string  | undefined) {
        this['blocking_lock_id'] = blockingLockId;
    }
    public get blockingLockId(): string | undefined {
        return this['blocking_lock_id'];
    }
}