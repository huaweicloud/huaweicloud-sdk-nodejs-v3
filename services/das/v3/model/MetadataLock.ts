import { Process } from './Process';


export class MetadataLock {
    private 'thread_id'?: string;
    private 'lock_status'?: string;
    private 'lock_mode'?: string;
    private 'lock_type'?: string;
    private 'lock_duration'?: string;
    private 'table_schema'?: string;
    private 'table_name'?: string;
    public user?: string;
    public time?: string;
    public host?: string;
    public database?: string;
    public command?: string;
    public state?: string;
    public sql?: string;
    private 'trx_exec_time'?: string;
    private 'block_process'?: Array<Process>;
    private 'wait_process'?: Array<Process>;
    public constructor(threadId?: string, lockStatus?: string, lockMode?: string, lockType?: string, lockDuration?: string, tableSchema?: string, tableName?: string, user?: string, time?: string, host?: string, database?: string, command?: string, state?: string, sql?: string, trxExecTime?: string, blockProcess?: Array<Process>, waitProcess?: Array<Process>) { 
        this['thread_id'] = threadId;
        this['lock_status'] = lockStatus;
        this['lock_mode'] = lockMode;
        this['lock_type'] = lockType;
        this['lock_duration'] = lockDuration;
        this['table_schema'] = tableSchema;
        this['table_name'] = tableName;
        this['user'] = user;
        this['time'] = time;
        this['host'] = host;
        this['database'] = database;
        this['command'] = command;
        this['state'] = state;
        this['sql'] = sql;
        this['trx_exec_time'] = trxExecTime;
        this['block_process'] = blockProcess;
        this['wait_process'] = waitProcess;
    }
    public withThreadId(threadId: string): MetadataLock {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withLockStatus(lockStatus: string): MetadataLock {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): string | undefined {
        return this['lock_status'];
    }
    public withLockMode(lockMode: string): MetadataLock {
        this['lock_mode'] = lockMode;
        return this;
    }
    public set lockMode(lockMode: string  | undefined) {
        this['lock_mode'] = lockMode;
    }
    public get lockMode(): string | undefined {
        return this['lock_mode'];
    }
    public withLockType(lockType: string): MetadataLock {
        this['lock_type'] = lockType;
        return this;
    }
    public set lockType(lockType: string  | undefined) {
        this['lock_type'] = lockType;
    }
    public get lockType(): string | undefined {
        return this['lock_type'];
    }
    public withLockDuration(lockDuration: string): MetadataLock {
        this['lock_duration'] = lockDuration;
        return this;
    }
    public set lockDuration(lockDuration: string  | undefined) {
        this['lock_duration'] = lockDuration;
    }
    public get lockDuration(): string | undefined {
        return this['lock_duration'];
    }
    public withTableSchema(tableSchema: string): MetadataLock {
        this['table_schema'] = tableSchema;
        return this;
    }
    public set tableSchema(tableSchema: string  | undefined) {
        this['table_schema'] = tableSchema;
    }
    public get tableSchema(): string | undefined {
        return this['table_schema'];
    }
    public withTableName(tableName: string): MetadataLock {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withUser(user: string): MetadataLock {
        this['user'] = user;
        return this;
    }
    public withTime(time: string): MetadataLock {
        this['time'] = time;
        return this;
    }
    public withHost(host: string): MetadataLock {
        this['host'] = host;
        return this;
    }
    public withDatabase(database: string): MetadataLock {
        this['database'] = database;
        return this;
    }
    public withCommand(command: string): MetadataLock {
        this['command'] = command;
        return this;
    }
    public withState(state: string): MetadataLock {
        this['state'] = state;
        return this;
    }
    public withSql(sql: string): MetadataLock {
        this['sql'] = sql;
        return this;
    }
    public withTrxExecTime(trxExecTime: string): MetadataLock {
        this['trx_exec_time'] = trxExecTime;
        return this;
    }
    public set trxExecTime(trxExecTime: string  | undefined) {
        this['trx_exec_time'] = trxExecTime;
    }
    public get trxExecTime(): string | undefined {
        return this['trx_exec_time'];
    }
    public withBlockProcess(blockProcess: Array<Process>): MetadataLock {
        this['block_process'] = blockProcess;
        return this;
    }
    public set blockProcess(blockProcess: Array<Process>  | undefined) {
        this['block_process'] = blockProcess;
    }
    public get blockProcess(): Array<Process> | undefined {
        return this['block_process'];
    }
    public withWaitProcess(waitProcess: Array<Process>): MetadataLock {
        this['wait_process'] = waitProcess;
        return this;
    }
    public set waitProcess(waitProcess: Array<Process>  | undefined) {
        this['wait_process'] = waitProcess;
    }
    public get waitProcess(): Array<Process> | undefined {
        return this['wait_process'];
    }
}