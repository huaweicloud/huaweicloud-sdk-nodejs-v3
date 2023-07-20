

export class QueryMetricResult {
    private 'job_id'?: string;
    private 'node_id'?: string;
    private 'time_stamp'?: string;
    private 'cpu_util'?: string;
    private 'mem_util'?: string;
    private 'network_incoming_bytes_rate'?: string;
    private 'network_outgoing_bytes_rate'?: string;
    private 'disk_read_bytes_rate'?: string;
    private 'disk_write_bytes_rate'?: string;
    private 'apply_rows_rate'?: string;
    private 'apply_transactions_rate'?: string;
    private 'apply_ddl_rate'?: string;
    private 'apply_average_execute_time'?: string;
    private 'apply_average_commit_time'?: string;
    private 'apply_current_state'?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): QueryMetricResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withNodeId(nodeId: string): QueryMetricResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withTimeStamp(timeStamp: string): QueryMetricResult {
        this['time_stamp'] = timeStamp;
        return this;
    }
    public set timeStamp(timeStamp: string  | undefined) {
        this['time_stamp'] = timeStamp;
    }
    public get timeStamp(): string | undefined {
        return this['time_stamp'];
    }
    public withCpuUtil(cpuUtil: string): QueryMetricResult {
        this['cpu_util'] = cpuUtil;
        return this;
    }
    public set cpuUtil(cpuUtil: string  | undefined) {
        this['cpu_util'] = cpuUtil;
    }
    public get cpuUtil(): string | undefined {
        return this['cpu_util'];
    }
    public withMemUtil(memUtil: string): QueryMetricResult {
        this['mem_util'] = memUtil;
        return this;
    }
    public set memUtil(memUtil: string  | undefined) {
        this['mem_util'] = memUtil;
    }
    public get memUtil(): string | undefined {
        return this['mem_util'];
    }
    public withNetworkIncomingBytesRate(networkIncomingBytesRate: string): QueryMetricResult {
        this['network_incoming_bytes_rate'] = networkIncomingBytesRate;
        return this;
    }
    public set networkIncomingBytesRate(networkIncomingBytesRate: string  | undefined) {
        this['network_incoming_bytes_rate'] = networkIncomingBytesRate;
    }
    public get networkIncomingBytesRate(): string | undefined {
        return this['network_incoming_bytes_rate'];
    }
    public withNetworkOutgoingBytesRate(networkOutgoingBytesRate: string): QueryMetricResult {
        this['network_outgoing_bytes_rate'] = networkOutgoingBytesRate;
        return this;
    }
    public set networkOutgoingBytesRate(networkOutgoingBytesRate: string  | undefined) {
        this['network_outgoing_bytes_rate'] = networkOutgoingBytesRate;
    }
    public get networkOutgoingBytesRate(): string | undefined {
        return this['network_outgoing_bytes_rate'];
    }
    public withDiskReadBytesRate(diskReadBytesRate: string): QueryMetricResult {
        this['disk_read_bytes_rate'] = diskReadBytesRate;
        return this;
    }
    public set diskReadBytesRate(diskReadBytesRate: string  | undefined) {
        this['disk_read_bytes_rate'] = diskReadBytesRate;
    }
    public get diskReadBytesRate(): string | undefined {
        return this['disk_read_bytes_rate'];
    }
    public withDiskWriteBytesRate(diskWriteBytesRate: string): QueryMetricResult {
        this['disk_write_bytes_rate'] = diskWriteBytesRate;
        return this;
    }
    public set diskWriteBytesRate(diskWriteBytesRate: string  | undefined) {
        this['disk_write_bytes_rate'] = diskWriteBytesRate;
    }
    public get diskWriteBytesRate(): string | undefined {
        return this['disk_write_bytes_rate'];
    }
    public withApplyRowsRate(applyRowsRate: string): QueryMetricResult {
        this['apply_rows_rate'] = applyRowsRate;
        return this;
    }
    public set applyRowsRate(applyRowsRate: string  | undefined) {
        this['apply_rows_rate'] = applyRowsRate;
    }
    public get applyRowsRate(): string | undefined {
        return this['apply_rows_rate'];
    }
    public withApplyTransactionsRate(applyTransactionsRate: string): QueryMetricResult {
        this['apply_transactions_rate'] = applyTransactionsRate;
        return this;
    }
    public set applyTransactionsRate(applyTransactionsRate: string  | undefined) {
        this['apply_transactions_rate'] = applyTransactionsRate;
    }
    public get applyTransactionsRate(): string | undefined {
        return this['apply_transactions_rate'];
    }
    public withApplyDdlRate(applyDdlRate: string): QueryMetricResult {
        this['apply_ddl_rate'] = applyDdlRate;
        return this;
    }
    public set applyDdlRate(applyDdlRate: string  | undefined) {
        this['apply_ddl_rate'] = applyDdlRate;
    }
    public get applyDdlRate(): string | undefined {
        return this['apply_ddl_rate'];
    }
    public withApplyAverageExecuteTime(applyAverageExecuteTime: string): QueryMetricResult {
        this['apply_average_execute_time'] = applyAverageExecuteTime;
        return this;
    }
    public set applyAverageExecuteTime(applyAverageExecuteTime: string  | undefined) {
        this['apply_average_execute_time'] = applyAverageExecuteTime;
    }
    public get applyAverageExecuteTime(): string | undefined {
        return this['apply_average_execute_time'];
    }
    public withApplyAverageCommitTime(applyAverageCommitTime: string): QueryMetricResult {
        this['apply_average_commit_time'] = applyAverageCommitTime;
        return this;
    }
    public set applyAverageCommitTime(applyAverageCommitTime: string  | undefined) {
        this['apply_average_commit_time'] = applyAverageCommitTime;
    }
    public get applyAverageCommitTime(): string | undefined {
        return this['apply_average_commit_time'];
    }
    public withApplyCurrentState(applyCurrentState: string): QueryMetricResult {
        this['apply_current_state'] = applyCurrentState;
        return this;
    }
    public set applyCurrentState(applyCurrentState: string  | undefined) {
        this['apply_current_state'] = applyCurrentState;
    }
    public get applyCurrentState(): string | undefined {
        return this['apply_current_state'];
    }
}