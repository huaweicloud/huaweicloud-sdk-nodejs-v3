

export class InnodbLock {
    private 'lock_id'?: string;
    private 'lock_trx_id'?: string;
    private 'lock_mode'?: string;
    private 'lock_type'?: string;
    private 'lock_table'?: string;
    private 'lock_index'?: string;
    private 'lock_space'?: string;
    private 'lock_page'?: string;
    private 'lock_rec'?: string;
    private 'lock_data'?: string;
    public constructor(lockId?: string, lockTrxId?: string, lockMode?: string, lockType?: string, lockTable?: string, lockIndex?: string, lockSpace?: string, lockPage?: string, lockRec?: string, lockData?: string) { 
        this['lock_id'] = lockId;
        this['lock_trx_id'] = lockTrxId;
        this['lock_mode'] = lockMode;
        this['lock_type'] = lockType;
        this['lock_table'] = lockTable;
        this['lock_index'] = lockIndex;
        this['lock_space'] = lockSpace;
        this['lock_page'] = lockPage;
        this['lock_rec'] = lockRec;
        this['lock_data'] = lockData;
    }
    public withLockId(lockId: string): InnodbLock {
        this['lock_id'] = lockId;
        return this;
    }
    public set lockId(lockId: string  | undefined) {
        this['lock_id'] = lockId;
    }
    public get lockId(): string | undefined {
        return this['lock_id'];
    }
    public withLockTrxId(lockTrxId: string): InnodbLock {
        this['lock_trx_id'] = lockTrxId;
        return this;
    }
    public set lockTrxId(lockTrxId: string  | undefined) {
        this['lock_trx_id'] = lockTrxId;
    }
    public get lockTrxId(): string | undefined {
        return this['lock_trx_id'];
    }
    public withLockMode(lockMode: string): InnodbLock {
        this['lock_mode'] = lockMode;
        return this;
    }
    public set lockMode(lockMode: string  | undefined) {
        this['lock_mode'] = lockMode;
    }
    public get lockMode(): string | undefined {
        return this['lock_mode'];
    }
    public withLockType(lockType: string): InnodbLock {
        this['lock_type'] = lockType;
        return this;
    }
    public set lockType(lockType: string  | undefined) {
        this['lock_type'] = lockType;
    }
    public get lockType(): string | undefined {
        return this['lock_type'];
    }
    public withLockTable(lockTable: string): InnodbLock {
        this['lock_table'] = lockTable;
        return this;
    }
    public set lockTable(lockTable: string  | undefined) {
        this['lock_table'] = lockTable;
    }
    public get lockTable(): string | undefined {
        return this['lock_table'];
    }
    public withLockIndex(lockIndex: string): InnodbLock {
        this['lock_index'] = lockIndex;
        return this;
    }
    public set lockIndex(lockIndex: string  | undefined) {
        this['lock_index'] = lockIndex;
    }
    public get lockIndex(): string | undefined {
        return this['lock_index'];
    }
    public withLockSpace(lockSpace: string): InnodbLock {
        this['lock_space'] = lockSpace;
        return this;
    }
    public set lockSpace(lockSpace: string  | undefined) {
        this['lock_space'] = lockSpace;
    }
    public get lockSpace(): string | undefined {
        return this['lock_space'];
    }
    public withLockPage(lockPage: string): InnodbLock {
        this['lock_page'] = lockPage;
        return this;
    }
    public set lockPage(lockPage: string  | undefined) {
        this['lock_page'] = lockPage;
    }
    public get lockPage(): string | undefined {
        return this['lock_page'];
    }
    public withLockRec(lockRec: string): InnodbLock {
        this['lock_rec'] = lockRec;
        return this;
    }
    public set lockRec(lockRec: string  | undefined) {
        this['lock_rec'] = lockRec;
    }
    public get lockRec(): string | undefined {
        return this['lock_rec'];
    }
    public withLockData(lockData: string): InnodbLock {
        this['lock_data'] = lockData;
        return this;
    }
    public set lockData(lockData: string  | undefined) {
        this['lock_data'] = lockData;
    }
    public get lockData(): string | undefined {
        return this['lock_data'];
    }
}