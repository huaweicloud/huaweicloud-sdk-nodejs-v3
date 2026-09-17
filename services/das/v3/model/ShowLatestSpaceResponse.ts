
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLatestSpaceResponse extends SdkResponse {
    private 'update_time'?: number;
    private 'buy_storage_bytes'?: number;
    private 'used_storage_bytes'?: number;
    private 'last_storage_bytes'?: number;
    private 'buy_storage_percent'?: number;
    private 'data_usage_bytes'?: number;
    private 'data_usage_percent'?: number;
    private 'binlog_usage_bytes'?: number;
    private 'binlog_usage_percent'?: number;
    private 'relay_log_usage_bytes'?: number;
    private 'relay_log_usage_percent'?: number;
    private 'audit_log_usage_bytes'?: number;
    private 'audit_log_usage_percent'?: number;
    private 'slow_log_usage_bytes'?: number;
    private 'slow_log_usage_percent'?: number;
    private 'temp_usage_bytes'?: number;
    private 'temp_usage_percent'?: number;
    private 'undo_log_usage_bytes'?: number;
    private 'undo_log_usage_percent'?: number;
    private 'other_usage_bytes'?: number;
    private 'other_usage_percent'?: number;
    private 'too_many_files'?: boolean;
    private 'page_usage_bytes'?: number;
    private 'total_space'?: number;
    private 'total_usage'?: number;
    private 'avail_size'?: number;
    public data?: number;
    public log?: number;
    public runtime?: number;
    private 'slow_log'?: number;
    private 'audit_log'?: number;
    public tempdb?: number;
    public msdb?: number;
    private 'used_size_bytes'?: number;
    private 'total_size_bytes'?: number;
    private 'avg_daily_growth_bytes'?: number;
    private 'estimated_available_days'?: number;
    private 'data_size_bytes'?: number;
    private 'oplog_size_bytes'?: number;
    private 'other_size_bytes'?: number;
    private 'wal_size'?: number;
    private 'data_size'?: number;
    private 'pgaudit_log_size'?: number;
    private 'pgsql_tmp_size'?: number;
    public constructor() { 
        super();
    }
    public withUpdateTime(updateTime: number): ShowLatestSpaceResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withBuyStorageBytes(buyStorageBytes: number): ShowLatestSpaceResponse {
        this['buy_storage_bytes'] = buyStorageBytes;
        return this;
    }
    public set buyStorageBytes(buyStorageBytes: number  | undefined) {
        this['buy_storage_bytes'] = buyStorageBytes;
    }
    public get buyStorageBytes(): number | undefined {
        return this['buy_storage_bytes'];
    }
    public withUsedStorageBytes(usedStorageBytes: number): ShowLatestSpaceResponse {
        this['used_storage_bytes'] = usedStorageBytes;
        return this;
    }
    public set usedStorageBytes(usedStorageBytes: number  | undefined) {
        this['used_storage_bytes'] = usedStorageBytes;
    }
    public get usedStorageBytes(): number | undefined {
        return this['used_storage_bytes'];
    }
    public withLastStorageBytes(lastStorageBytes: number): ShowLatestSpaceResponse {
        this['last_storage_bytes'] = lastStorageBytes;
        return this;
    }
    public set lastStorageBytes(lastStorageBytes: number  | undefined) {
        this['last_storage_bytes'] = lastStorageBytes;
    }
    public get lastStorageBytes(): number | undefined {
        return this['last_storage_bytes'];
    }
    public withBuyStoragePercent(buyStoragePercent: number): ShowLatestSpaceResponse {
        this['buy_storage_percent'] = buyStoragePercent;
        return this;
    }
    public set buyStoragePercent(buyStoragePercent: number  | undefined) {
        this['buy_storage_percent'] = buyStoragePercent;
    }
    public get buyStoragePercent(): number | undefined {
        return this['buy_storage_percent'];
    }
    public withDataUsageBytes(dataUsageBytes: number): ShowLatestSpaceResponse {
        this['data_usage_bytes'] = dataUsageBytes;
        return this;
    }
    public set dataUsageBytes(dataUsageBytes: number  | undefined) {
        this['data_usage_bytes'] = dataUsageBytes;
    }
    public get dataUsageBytes(): number | undefined {
        return this['data_usage_bytes'];
    }
    public withDataUsagePercent(dataUsagePercent: number): ShowLatestSpaceResponse {
        this['data_usage_percent'] = dataUsagePercent;
        return this;
    }
    public set dataUsagePercent(dataUsagePercent: number  | undefined) {
        this['data_usage_percent'] = dataUsagePercent;
    }
    public get dataUsagePercent(): number | undefined {
        return this['data_usage_percent'];
    }
    public withBinlogUsageBytes(binlogUsageBytes: number): ShowLatestSpaceResponse {
        this['binlog_usage_bytes'] = binlogUsageBytes;
        return this;
    }
    public set binlogUsageBytes(binlogUsageBytes: number  | undefined) {
        this['binlog_usage_bytes'] = binlogUsageBytes;
    }
    public get binlogUsageBytes(): number | undefined {
        return this['binlog_usage_bytes'];
    }
    public withBinlogUsagePercent(binlogUsagePercent: number): ShowLatestSpaceResponse {
        this['binlog_usage_percent'] = binlogUsagePercent;
        return this;
    }
    public set binlogUsagePercent(binlogUsagePercent: number  | undefined) {
        this['binlog_usage_percent'] = binlogUsagePercent;
    }
    public get binlogUsagePercent(): number | undefined {
        return this['binlog_usage_percent'];
    }
    public withRelayLogUsageBytes(relayLogUsageBytes: number): ShowLatestSpaceResponse {
        this['relay_log_usage_bytes'] = relayLogUsageBytes;
        return this;
    }
    public set relayLogUsageBytes(relayLogUsageBytes: number  | undefined) {
        this['relay_log_usage_bytes'] = relayLogUsageBytes;
    }
    public get relayLogUsageBytes(): number | undefined {
        return this['relay_log_usage_bytes'];
    }
    public withRelayLogUsagePercent(relayLogUsagePercent: number): ShowLatestSpaceResponse {
        this['relay_log_usage_percent'] = relayLogUsagePercent;
        return this;
    }
    public set relayLogUsagePercent(relayLogUsagePercent: number  | undefined) {
        this['relay_log_usage_percent'] = relayLogUsagePercent;
    }
    public get relayLogUsagePercent(): number | undefined {
        return this['relay_log_usage_percent'];
    }
    public withAuditLogUsageBytes(auditLogUsageBytes: number): ShowLatestSpaceResponse {
        this['audit_log_usage_bytes'] = auditLogUsageBytes;
        return this;
    }
    public set auditLogUsageBytes(auditLogUsageBytes: number  | undefined) {
        this['audit_log_usage_bytes'] = auditLogUsageBytes;
    }
    public get auditLogUsageBytes(): number | undefined {
        return this['audit_log_usage_bytes'];
    }
    public withAuditLogUsagePercent(auditLogUsagePercent: number): ShowLatestSpaceResponse {
        this['audit_log_usage_percent'] = auditLogUsagePercent;
        return this;
    }
    public set auditLogUsagePercent(auditLogUsagePercent: number  | undefined) {
        this['audit_log_usage_percent'] = auditLogUsagePercent;
    }
    public get auditLogUsagePercent(): number | undefined {
        return this['audit_log_usage_percent'];
    }
    public withSlowLogUsageBytes(slowLogUsageBytes: number): ShowLatestSpaceResponse {
        this['slow_log_usage_bytes'] = slowLogUsageBytes;
        return this;
    }
    public set slowLogUsageBytes(slowLogUsageBytes: number  | undefined) {
        this['slow_log_usage_bytes'] = slowLogUsageBytes;
    }
    public get slowLogUsageBytes(): number | undefined {
        return this['slow_log_usage_bytes'];
    }
    public withSlowLogUsagePercent(slowLogUsagePercent: number): ShowLatestSpaceResponse {
        this['slow_log_usage_percent'] = slowLogUsagePercent;
        return this;
    }
    public set slowLogUsagePercent(slowLogUsagePercent: number  | undefined) {
        this['slow_log_usage_percent'] = slowLogUsagePercent;
    }
    public get slowLogUsagePercent(): number | undefined {
        return this['slow_log_usage_percent'];
    }
    public withTempUsageBytes(tempUsageBytes: number): ShowLatestSpaceResponse {
        this['temp_usage_bytes'] = tempUsageBytes;
        return this;
    }
    public set tempUsageBytes(tempUsageBytes: number  | undefined) {
        this['temp_usage_bytes'] = tempUsageBytes;
    }
    public get tempUsageBytes(): number | undefined {
        return this['temp_usage_bytes'];
    }
    public withTempUsagePercent(tempUsagePercent: number): ShowLatestSpaceResponse {
        this['temp_usage_percent'] = tempUsagePercent;
        return this;
    }
    public set tempUsagePercent(tempUsagePercent: number  | undefined) {
        this['temp_usage_percent'] = tempUsagePercent;
    }
    public get tempUsagePercent(): number | undefined {
        return this['temp_usage_percent'];
    }
    public withUndoLogUsageBytes(undoLogUsageBytes: number): ShowLatestSpaceResponse {
        this['undo_log_usage_bytes'] = undoLogUsageBytes;
        return this;
    }
    public set undoLogUsageBytes(undoLogUsageBytes: number  | undefined) {
        this['undo_log_usage_bytes'] = undoLogUsageBytes;
    }
    public get undoLogUsageBytes(): number | undefined {
        return this['undo_log_usage_bytes'];
    }
    public withUndoLogUsagePercent(undoLogUsagePercent: number): ShowLatestSpaceResponse {
        this['undo_log_usage_percent'] = undoLogUsagePercent;
        return this;
    }
    public set undoLogUsagePercent(undoLogUsagePercent: number  | undefined) {
        this['undo_log_usage_percent'] = undoLogUsagePercent;
    }
    public get undoLogUsagePercent(): number | undefined {
        return this['undo_log_usage_percent'];
    }
    public withOtherUsageBytes(otherUsageBytes: number): ShowLatestSpaceResponse {
        this['other_usage_bytes'] = otherUsageBytes;
        return this;
    }
    public set otherUsageBytes(otherUsageBytes: number  | undefined) {
        this['other_usage_bytes'] = otherUsageBytes;
    }
    public get otherUsageBytes(): number | undefined {
        return this['other_usage_bytes'];
    }
    public withOtherUsagePercent(otherUsagePercent: number): ShowLatestSpaceResponse {
        this['other_usage_percent'] = otherUsagePercent;
        return this;
    }
    public set otherUsagePercent(otherUsagePercent: number  | undefined) {
        this['other_usage_percent'] = otherUsagePercent;
    }
    public get otherUsagePercent(): number | undefined {
        return this['other_usage_percent'];
    }
    public withTooManyFiles(tooManyFiles: boolean): ShowLatestSpaceResponse {
        this['too_many_files'] = tooManyFiles;
        return this;
    }
    public set tooManyFiles(tooManyFiles: boolean  | undefined) {
        this['too_many_files'] = tooManyFiles;
    }
    public get tooManyFiles(): boolean | undefined {
        return this['too_many_files'];
    }
    public withPageUsageBytes(pageUsageBytes: number): ShowLatestSpaceResponse {
        this['page_usage_bytes'] = pageUsageBytes;
        return this;
    }
    public set pageUsageBytes(pageUsageBytes: number  | undefined) {
        this['page_usage_bytes'] = pageUsageBytes;
    }
    public get pageUsageBytes(): number | undefined {
        return this['page_usage_bytes'];
    }
    public withTotalSpace(totalSpace: number): ShowLatestSpaceResponse {
        this['total_space'] = totalSpace;
        return this;
    }
    public set totalSpace(totalSpace: number  | undefined) {
        this['total_space'] = totalSpace;
    }
    public get totalSpace(): number | undefined {
        return this['total_space'];
    }
    public withTotalUsage(totalUsage: number): ShowLatestSpaceResponse {
        this['total_usage'] = totalUsage;
        return this;
    }
    public set totalUsage(totalUsage: number  | undefined) {
        this['total_usage'] = totalUsage;
    }
    public get totalUsage(): number | undefined {
        return this['total_usage'];
    }
    public withAvailSize(availSize: number): ShowLatestSpaceResponse {
        this['avail_size'] = availSize;
        return this;
    }
    public set availSize(availSize: number  | undefined) {
        this['avail_size'] = availSize;
    }
    public get availSize(): number | undefined {
        return this['avail_size'];
    }
    public withData(data: number): ShowLatestSpaceResponse {
        this['data'] = data;
        return this;
    }
    public withLog(log: number): ShowLatestSpaceResponse {
        this['log'] = log;
        return this;
    }
    public withRuntime(runtime: number): ShowLatestSpaceResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withSlowLog(slowLog: number): ShowLatestSpaceResponse {
        this['slow_log'] = slowLog;
        return this;
    }
    public set slowLog(slowLog: number  | undefined) {
        this['slow_log'] = slowLog;
    }
    public get slowLog(): number | undefined {
        return this['slow_log'];
    }
    public withAuditLog(auditLog: number): ShowLatestSpaceResponse {
        this['audit_log'] = auditLog;
        return this;
    }
    public set auditLog(auditLog: number  | undefined) {
        this['audit_log'] = auditLog;
    }
    public get auditLog(): number | undefined {
        return this['audit_log'];
    }
    public withTempdb(tempdb: number): ShowLatestSpaceResponse {
        this['tempdb'] = tempdb;
        return this;
    }
    public withMsdb(msdb: number): ShowLatestSpaceResponse {
        this['msdb'] = msdb;
        return this;
    }
    public withUsedSizeBytes(usedSizeBytes: number): ShowLatestSpaceResponse {
        this['used_size_bytes'] = usedSizeBytes;
        return this;
    }
    public set usedSizeBytes(usedSizeBytes: number  | undefined) {
        this['used_size_bytes'] = usedSizeBytes;
    }
    public get usedSizeBytes(): number | undefined {
        return this['used_size_bytes'];
    }
    public withTotalSizeBytes(totalSizeBytes: number): ShowLatestSpaceResponse {
        this['total_size_bytes'] = totalSizeBytes;
        return this;
    }
    public set totalSizeBytes(totalSizeBytes: number  | undefined) {
        this['total_size_bytes'] = totalSizeBytes;
    }
    public get totalSizeBytes(): number | undefined {
        return this['total_size_bytes'];
    }
    public withAvgDailyGrowthBytes(avgDailyGrowthBytes: number): ShowLatestSpaceResponse {
        this['avg_daily_growth_bytes'] = avgDailyGrowthBytes;
        return this;
    }
    public set avgDailyGrowthBytes(avgDailyGrowthBytes: number  | undefined) {
        this['avg_daily_growth_bytes'] = avgDailyGrowthBytes;
    }
    public get avgDailyGrowthBytes(): number | undefined {
        return this['avg_daily_growth_bytes'];
    }
    public withEstimatedAvailableDays(estimatedAvailableDays: number): ShowLatestSpaceResponse {
        this['estimated_available_days'] = estimatedAvailableDays;
        return this;
    }
    public set estimatedAvailableDays(estimatedAvailableDays: number  | undefined) {
        this['estimated_available_days'] = estimatedAvailableDays;
    }
    public get estimatedAvailableDays(): number | undefined {
        return this['estimated_available_days'];
    }
    public withDataSizeBytes(dataSizeBytes: number): ShowLatestSpaceResponse {
        this['data_size_bytes'] = dataSizeBytes;
        return this;
    }
    public set dataSizeBytes(dataSizeBytes: number  | undefined) {
        this['data_size_bytes'] = dataSizeBytes;
    }
    public get dataSizeBytes(): number | undefined {
        return this['data_size_bytes'];
    }
    public withOplogSizeBytes(oplogSizeBytes: number): ShowLatestSpaceResponse {
        this['oplog_size_bytes'] = oplogSizeBytes;
        return this;
    }
    public set oplogSizeBytes(oplogSizeBytes: number  | undefined) {
        this['oplog_size_bytes'] = oplogSizeBytes;
    }
    public get oplogSizeBytes(): number | undefined {
        return this['oplog_size_bytes'];
    }
    public withOtherSizeBytes(otherSizeBytes: number): ShowLatestSpaceResponse {
        this['other_size_bytes'] = otherSizeBytes;
        return this;
    }
    public set otherSizeBytes(otherSizeBytes: number  | undefined) {
        this['other_size_bytes'] = otherSizeBytes;
    }
    public get otherSizeBytes(): number | undefined {
        return this['other_size_bytes'];
    }
    public withWalSize(walSize: number): ShowLatestSpaceResponse {
        this['wal_size'] = walSize;
        return this;
    }
    public set walSize(walSize: number  | undefined) {
        this['wal_size'] = walSize;
    }
    public get walSize(): number | undefined {
        return this['wal_size'];
    }
    public withDataSize(dataSize: number): ShowLatestSpaceResponse {
        this['data_size'] = dataSize;
        return this;
    }
    public set dataSize(dataSize: number  | undefined) {
        this['data_size'] = dataSize;
    }
    public get dataSize(): number | undefined {
        return this['data_size'];
    }
    public withPgauditLogSize(pgauditLogSize: number): ShowLatestSpaceResponse {
        this['pgaudit_log_size'] = pgauditLogSize;
        return this;
    }
    public set pgauditLogSize(pgauditLogSize: number  | undefined) {
        this['pgaudit_log_size'] = pgauditLogSize;
    }
    public get pgauditLogSize(): number | undefined {
        return this['pgaudit_log_size'];
    }
    public withPgsqlTmpSize(pgsqlTmpSize: number): ShowLatestSpaceResponse {
        this['pgsql_tmp_size'] = pgsqlTmpSize;
        return this;
    }
    public set pgsqlTmpSize(pgsqlTmpSize: number  | undefined) {
        this['pgsql_tmp_size'] = pgsqlTmpSize;
    }
    public get pgsqlTmpSize(): number | undefined {
        return this['pgsql_tmp_size'];
    }
}