

export class Session {
    private 'sample_time'?: string;
    private 'blocked_process_id'?: string;
    private 'database_oid'?: number;
    private 'database_name'?: string;
    private 'session_id'?: number;
    private 'parallel_leader_id'?: number;
    private 'backend_user_oid'?: number;
    private 'user_name'?: string;
    private 'app_name'?: string;
    private 'client_ip_address'?: string;
    private 'client_host_name'?: string;
    private 'client_port'?: number;
    private 'session_start_time'?: string;
    private 'transaction_start_time'?: string;
    private 'transaction_execution_time'?: number;
    private 'query_start_time'?: string;
    private 'state_change_time'?: string;
    private 'wait_event_type'?: string;
    private 'wait_event_name'?: string;
    private 'session_status'?: string;
    private 'backend_xid'?: number;
    private 'backend_xmin'?: number;
    private 'query_id'?: string;
    private 'sql_statement'?: string;
    private 'process_type'?: string;
    private 'memory_usage'?: number;
    private 'process_status'?: string;
    private 'cpu_usage'?: number;
    private 'io_wait_status'?: number;
    private 'disk_read_rate'?: number;
    private 'disk_write_rate'?: number;
    public constructor() { 
    }
    public withSampleTime(sampleTime: string): Session {
        this['sample_time'] = sampleTime;
        return this;
    }
    public set sampleTime(sampleTime: string  | undefined) {
        this['sample_time'] = sampleTime;
    }
    public get sampleTime(): string | undefined {
        return this['sample_time'];
    }
    public withBlockedProcessId(blockedProcessId: string): Session {
        this['blocked_process_id'] = blockedProcessId;
        return this;
    }
    public set blockedProcessId(blockedProcessId: string  | undefined) {
        this['blocked_process_id'] = blockedProcessId;
    }
    public get blockedProcessId(): string | undefined {
        return this['blocked_process_id'];
    }
    public withDatabaseOid(databaseOid: number): Session {
        this['database_oid'] = databaseOid;
        return this;
    }
    public set databaseOid(databaseOid: number  | undefined) {
        this['database_oid'] = databaseOid;
    }
    public get databaseOid(): number | undefined {
        return this['database_oid'];
    }
    public withDatabaseName(databaseName: string): Session {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSessionId(sessionId: number): Session {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: number  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): number | undefined {
        return this['session_id'];
    }
    public withParallelLeaderId(parallelLeaderId: number): Session {
        this['parallel_leader_id'] = parallelLeaderId;
        return this;
    }
    public set parallelLeaderId(parallelLeaderId: number  | undefined) {
        this['parallel_leader_id'] = parallelLeaderId;
    }
    public get parallelLeaderId(): number | undefined {
        return this['parallel_leader_id'];
    }
    public withBackendUserOid(backendUserOid: number): Session {
        this['backend_user_oid'] = backendUserOid;
        return this;
    }
    public set backendUserOid(backendUserOid: number  | undefined) {
        this['backend_user_oid'] = backendUserOid;
    }
    public get backendUserOid(): number | undefined {
        return this['backend_user_oid'];
    }
    public withUserName(userName: string): Session {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAppName(appName: string): Session {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withClientIpAddress(clientIpAddress: string): Session {
        this['client_ip_address'] = clientIpAddress;
        return this;
    }
    public set clientIpAddress(clientIpAddress: string  | undefined) {
        this['client_ip_address'] = clientIpAddress;
    }
    public get clientIpAddress(): string | undefined {
        return this['client_ip_address'];
    }
    public withClientHostName(clientHostName: string): Session {
        this['client_host_name'] = clientHostName;
        return this;
    }
    public set clientHostName(clientHostName: string  | undefined) {
        this['client_host_name'] = clientHostName;
    }
    public get clientHostName(): string | undefined {
        return this['client_host_name'];
    }
    public withClientPort(clientPort: number): Session {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: number  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): number | undefined {
        return this['client_port'];
    }
    public withSessionStartTime(sessionStartTime: string): Session {
        this['session_start_time'] = sessionStartTime;
        return this;
    }
    public set sessionStartTime(sessionStartTime: string  | undefined) {
        this['session_start_time'] = sessionStartTime;
    }
    public get sessionStartTime(): string | undefined {
        return this['session_start_time'];
    }
    public withTransactionStartTime(transactionStartTime: string): Session {
        this['transaction_start_time'] = transactionStartTime;
        return this;
    }
    public set transactionStartTime(transactionStartTime: string  | undefined) {
        this['transaction_start_time'] = transactionStartTime;
    }
    public get transactionStartTime(): string | undefined {
        return this['transaction_start_time'];
    }
    public withTransactionExecutionTime(transactionExecutionTime: number): Session {
        this['transaction_execution_time'] = transactionExecutionTime;
        return this;
    }
    public set transactionExecutionTime(transactionExecutionTime: number  | undefined) {
        this['transaction_execution_time'] = transactionExecutionTime;
    }
    public get transactionExecutionTime(): number | undefined {
        return this['transaction_execution_time'];
    }
    public withQueryStartTime(queryStartTime: string): Session {
        this['query_start_time'] = queryStartTime;
        return this;
    }
    public set queryStartTime(queryStartTime: string  | undefined) {
        this['query_start_time'] = queryStartTime;
    }
    public get queryStartTime(): string | undefined {
        return this['query_start_time'];
    }
    public withStateChangeTime(stateChangeTime: string): Session {
        this['state_change_time'] = stateChangeTime;
        return this;
    }
    public set stateChangeTime(stateChangeTime: string  | undefined) {
        this['state_change_time'] = stateChangeTime;
    }
    public get stateChangeTime(): string | undefined {
        return this['state_change_time'];
    }
    public withWaitEventType(waitEventType: string): Session {
        this['wait_event_type'] = waitEventType;
        return this;
    }
    public set waitEventType(waitEventType: string  | undefined) {
        this['wait_event_type'] = waitEventType;
    }
    public get waitEventType(): string | undefined {
        return this['wait_event_type'];
    }
    public withWaitEventName(waitEventName: string): Session {
        this['wait_event_name'] = waitEventName;
        return this;
    }
    public set waitEventName(waitEventName: string  | undefined) {
        this['wait_event_name'] = waitEventName;
    }
    public get waitEventName(): string | undefined {
        return this['wait_event_name'];
    }
    public withSessionStatus(sessionStatus: string): Session {
        this['session_status'] = sessionStatus;
        return this;
    }
    public set sessionStatus(sessionStatus: string  | undefined) {
        this['session_status'] = sessionStatus;
    }
    public get sessionStatus(): string | undefined {
        return this['session_status'];
    }
    public withBackendXid(backendXid: number): Session {
        this['backend_xid'] = backendXid;
        return this;
    }
    public set backendXid(backendXid: number  | undefined) {
        this['backend_xid'] = backendXid;
    }
    public get backendXid(): number | undefined {
        return this['backend_xid'];
    }
    public withBackendXmin(backendXmin: number): Session {
        this['backend_xmin'] = backendXmin;
        return this;
    }
    public set backendXmin(backendXmin: number  | undefined) {
        this['backend_xmin'] = backendXmin;
    }
    public get backendXmin(): number | undefined {
        return this['backend_xmin'];
    }
    public withQueryId(queryId: string): Session {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withSqlStatement(sqlStatement: string): Session {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withProcessType(processType: string): Session {
        this['process_type'] = processType;
        return this;
    }
    public set processType(processType: string  | undefined) {
        this['process_type'] = processType;
    }
    public get processType(): string | undefined {
        return this['process_type'];
    }
    public withMemoryUsage(memoryUsage: number): Session {
        this['memory_usage'] = memoryUsage;
        return this;
    }
    public set memoryUsage(memoryUsage: number  | undefined) {
        this['memory_usage'] = memoryUsage;
    }
    public get memoryUsage(): number | undefined {
        return this['memory_usage'];
    }
    public withProcessStatus(processStatus: string): Session {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: string  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): string | undefined {
        return this['process_status'];
    }
    public withCpuUsage(cpuUsage: number): Session {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: number  | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage(): number | undefined {
        return this['cpu_usage'];
    }
    public withIoWaitStatus(ioWaitStatus: number): Session {
        this['io_wait_status'] = ioWaitStatus;
        return this;
    }
    public set ioWaitStatus(ioWaitStatus: number  | undefined) {
        this['io_wait_status'] = ioWaitStatus;
    }
    public get ioWaitStatus(): number | undefined {
        return this['io_wait_status'];
    }
    public withDiskReadRate(diskReadRate: number): Session {
        this['disk_read_rate'] = diskReadRate;
        return this;
    }
    public set diskReadRate(diskReadRate: number  | undefined) {
        this['disk_read_rate'] = diskReadRate;
    }
    public get diskReadRate(): number | undefined {
        return this['disk_read_rate'];
    }
    public withDiskWriteRate(diskWriteRate: number): Session {
        this['disk_write_rate'] = diskWriteRate;
        return this;
    }
    public set diskWriteRate(diskWriteRate: number  | undefined) {
        this['disk_write_rate'] = diskWriteRate;
    }
    public get diskWriteRate(): number | undefined {
        return this['disk_write_rate'];
    }
}