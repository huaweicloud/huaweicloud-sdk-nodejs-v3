import { ShowDeadLockTopologyGraphRespLockedData } from './ShowDeadLockTopologyGraphRespLockedData';


export class ShowDeadLockTopologyGraphRespLocks {
    private 'lock_id'?: string;
    private 'transaction_id'?: string;
    private 'index_name'?: string;
    private 'lock_type'?: string;
    private 'lock_mode'?: string;
    private 'lock_status'?: string;
    private 'space_id'?: number;
    private 'page_no'?: number;
    private 'heap_no'?: number;
    private 'table_name'?: string;
    private 'primary_key'?: boolean;
    private 'locked_data'?: Array<ShowDeadLockTopologyGraphRespLockedData>;
    public unknown?: boolean;
    public constructor(lockId?: string, transactionId?: string, indexName?: string, lockType?: string, lockMode?: string, lockStatus?: string, spaceId?: number, pageNo?: number, heapNo?: number, tableName?: string, primaryKey?: boolean, lockedData?: Array<ShowDeadLockTopologyGraphRespLockedData>, unknown?: boolean) { 
        this['lock_id'] = lockId;
        this['transaction_id'] = transactionId;
        this['index_name'] = indexName;
        this['lock_type'] = lockType;
        this['lock_mode'] = lockMode;
        this['lock_status'] = lockStatus;
        this['space_id'] = spaceId;
        this['page_no'] = pageNo;
        this['heap_no'] = heapNo;
        this['table_name'] = tableName;
        this['primary_key'] = primaryKey;
        this['locked_data'] = lockedData;
        this['unknown'] = unknown;
    }
    public withLockId(lockId: string): ShowDeadLockTopologyGraphRespLocks {
        this['lock_id'] = lockId;
        return this;
    }
    public set lockId(lockId: string  | undefined) {
        this['lock_id'] = lockId;
    }
    public get lockId(): string | undefined {
        return this['lock_id'];
    }
    public withTransactionId(transactionId: string): ShowDeadLockTopologyGraphRespLocks {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withIndexName(indexName: string): ShowDeadLockTopologyGraphRespLocks {
        this['index_name'] = indexName;
        return this;
    }
    public set indexName(indexName: string  | undefined) {
        this['index_name'] = indexName;
    }
    public get indexName(): string | undefined {
        return this['index_name'];
    }
    public withLockType(lockType: string): ShowDeadLockTopologyGraphRespLocks {
        this['lock_type'] = lockType;
        return this;
    }
    public set lockType(lockType: string  | undefined) {
        this['lock_type'] = lockType;
    }
    public get lockType(): string | undefined {
        return this['lock_type'];
    }
    public withLockMode(lockMode: string): ShowDeadLockTopologyGraphRespLocks {
        this['lock_mode'] = lockMode;
        return this;
    }
    public set lockMode(lockMode: string  | undefined) {
        this['lock_mode'] = lockMode;
    }
    public get lockMode(): string | undefined {
        return this['lock_mode'];
    }
    public withLockStatus(lockStatus: string): ShowDeadLockTopologyGraphRespLocks {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): string | undefined {
        return this['lock_status'];
    }
    public withSpaceId(spaceId: number): ShowDeadLockTopologyGraphRespLocks {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: number  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): number | undefined {
        return this['space_id'];
    }
    public withPageNo(pageNo: number): ShowDeadLockTopologyGraphRespLocks {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withHeapNo(heapNo: number): ShowDeadLockTopologyGraphRespLocks {
        this['heap_no'] = heapNo;
        return this;
    }
    public set heapNo(heapNo: number  | undefined) {
        this['heap_no'] = heapNo;
    }
    public get heapNo(): number | undefined {
        return this['heap_no'];
    }
    public withTableName(tableName: string): ShowDeadLockTopologyGraphRespLocks {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withPrimaryKey(primaryKey: boolean): ShowDeadLockTopologyGraphRespLocks {
        this['primary_key'] = primaryKey;
        return this;
    }
    public set primaryKey(primaryKey: boolean  | undefined) {
        this['primary_key'] = primaryKey;
    }
    public get primaryKey(): boolean | undefined {
        return this['primary_key'];
    }
    public withLockedData(lockedData: Array<ShowDeadLockTopologyGraphRespLockedData>): ShowDeadLockTopologyGraphRespLocks {
        this['locked_data'] = lockedData;
        return this;
    }
    public set lockedData(lockedData: Array<ShowDeadLockTopologyGraphRespLockedData>  | undefined) {
        this['locked_data'] = lockedData;
    }
    public get lockedData(): Array<ShowDeadLockTopologyGraphRespLockedData> | undefined {
        return this['locked_data'];
    }
    public withUnknown(unknown: boolean): ShowDeadLockTopologyGraphRespLocks {
        this['unknown'] = unknown;
        return this;
    }
}