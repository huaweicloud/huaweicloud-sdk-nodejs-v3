import { ProcessInfo } from './ProcessInfo';


export class MetaLockInfo {
    private 'lock_id'?: string;
    private 'thread_id'?: string;
    private 'lock_status'?: string;
    private 'lock_mode'?: string;
    private 'lock_type'?: string;
    private 'lock_duration'?: string;
    private 'table_schema'?: string;
    private 'table_name'?: string;
    public user?: string;
    public time?: string;
    private 'block_number'?: number;
    private 'wait_number'?: number;
    public host?: string;
    private 'db_name'?: string;
    public command?: string;
    public state?: string;
    public info?: string;
    private 'sql_limit_rule'?: string;
    private 'trx_exec_time'?: string;
    private 'block_process_info'?: Array<ProcessInfo>;
    private 'wait_process_info'?: Array<ProcessInfo>;
    public constructor() { 
    }
    public withLockId(lockId: string): MetaLockInfo {
        this['lock_id'] = lockId;
        return this;
    }
    public set lockId(lockId: string  | undefined) {
        this['lock_id'] = lockId;
    }
    public get lockId(): string | undefined {
        return this['lock_id'];
    }
    public withThreadId(threadId: string): MetaLockInfo {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withLockStatus(lockStatus: string): MetaLockInfo {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): string | undefined {
        return this['lock_status'];
    }
    public withLockMode(lockMode: string): MetaLockInfo {
        this['lock_mode'] = lockMode;
        return this;
    }
    public set lockMode(lockMode: string  | undefined) {
        this['lock_mode'] = lockMode;
    }
    public get lockMode(): string | undefined {
        return this['lock_mode'];
    }
    public withLockType(lockType: string): MetaLockInfo {
        this['lock_type'] = lockType;
        return this;
    }
    public set lockType(lockType: string  | undefined) {
        this['lock_type'] = lockType;
    }
    public get lockType(): string | undefined {
        return this['lock_type'];
    }
    public withLockDuration(lockDuration: string): MetaLockInfo {
        this['lock_duration'] = lockDuration;
        return this;
    }
    public set lockDuration(lockDuration: string  | undefined) {
        this['lock_duration'] = lockDuration;
    }
    public get lockDuration(): string | undefined {
        return this['lock_duration'];
    }
    public withTableSchema(tableSchema: string): MetaLockInfo {
        this['table_schema'] = tableSchema;
        return this;
    }
    public set tableSchema(tableSchema: string  | undefined) {
        this['table_schema'] = tableSchema;
    }
    public get tableSchema(): string | undefined {
        return this['table_schema'];
    }
    public withTableName(tableName: string): MetaLockInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withUser(user: string): MetaLockInfo {
        this['user'] = user;
        return this;
    }
    public withTime(time: string): MetaLockInfo {
        this['time'] = time;
        return this;
    }
    public withBlockNumber(blockNumber: number): MetaLockInfo {
        this['block_number'] = blockNumber;
        return this;
    }
    public set blockNumber(blockNumber: number  | undefined) {
        this['block_number'] = blockNumber;
    }
    public get blockNumber(): number | undefined {
        return this['block_number'];
    }
    public withWaitNumber(waitNumber: number): MetaLockInfo {
        this['wait_number'] = waitNumber;
        return this;
    }
    public set waitNumber(waitNumber: number  | undefined) {
        this['wait_number'] = waitNumber;
    }
    public get waitNumber(): number | undefined {
        return this['wait_number'];
    }
    public withHost(host: string): MetaLockInfo {
        this['host'] = host;
        return this;
    }
    public withDbName(dbName: string): MetaLockInfo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withCommand(command: string): MetaLockInfo {
        this['command'] = command;
        return this;
    }
    public withState(state: string): MetaLockInfo {
        this['state'] = state;
        return this;
    }
    public withInfo(info: string): MetaLockInfo {
        this['info'] = info;
        return this;
    }
    public withSqlLimitRule(sqlLimitRule: string): MetaLockInfo {
        this['sql_limit_rule'] = sqlLimitRule;
        return this;
    }
    public set sqlLimitRule(sqlLimitRule: string  | undefined) {
        this['sql_limit_rule'] = sqlLimitRule;
    }
    public get sqlLimitRule(): string | undefined {
        return this['sql_limit_rule'];
    }
    public withTrxExecTime(trxExecTime: string): MetaLockInfo {
        this['trx_exec_time'] = trxExecTime;
        return this;
    }
    public set trxExecTime(trxExecTime: string  | undefined) {
        this['trx_exec_time'] = trxExecTime;
    }
    public get trxExecTime(): string | undefined {
        return this['trx_exec_time'];
    }
    public withBlockProcessInfo(blockProcessInfo: Array<ProcessInfo>): MetaLockInfo {
        this['block_process_info'] = blockProcessInfo;
        return this;
    }
    public set blockProcessInfo(blockProcessInfo: Array<ProcessInfo>  | undefined) {
        this['block_process_info'] = blockProcessInfo;
    }
    public get blockProcessInfo(): Array<ProcessInfo> | undefined {
        return this['block_process_info'];
    }
    public withWaitProcessInfo(waitProcessInfo: Array<ProcessInfo>): MetaLockInfo {
        this['wait_process_info'] = waitProcessInfo;
        return this;
    }
    public set waitProcessInfo(waitProcessInfo: Array<ProcessInfo>  | undefined) {
        this['wait_process_info'] = waitProcessInfo;
    }
    public get waitProcessInfo(): Array<ProcessInfo> | undefined {
        return this['wait_process_info'];
    }
}