

export class UpdateTaskSpeedReq {
    private 'subtask_name'?: UpdateTaskSpeedReqSubtaskNameEnum | string;
    public progress?: number;
    public replicatesize?: number;
    public totalsize?: number;
    private 'process_trace'?: string;
    private 'migrate_speed'?: number;
    private 'compress_rate'?: number;
    private 'remain_time'?: number;
    private 'total_cpu_usage'?: number;
    private 'agent_cpu_usage'?: number;
    private 'total_mem_usage'?: number;
    private 'agent_mem_usage'?: number;
    private 'total_disk_io'?: number;
    private 'agent_disk_io'?: number;
    private 'need_migration_test'?: boolean;
    private 'agent_time'?: string;
    public constructor(subtaskName?: string, progress?: number, replicatesize?: number, totalsize?: number, processTrace?: string) { 
        this['subtask_name'] = subtaskName;
        this['progress'] = progress;
        this['replicatesize'] = replicatesize;
        this['totalsize'] = totalsize;
        this['process_trace'] = processTrace;
    }
    public withSubtaskName(subtaskName: UpdateTaskSpeedReqSubtaskNameEnum | string): UpdateTaskSpeedReq {
        this['subtask_name'] = subtaskName;
        return this;
    }
    public set subtaskName(subtaskName: UpdateTaskSpeedReqSubtaskNameEnum | string  | undefined) {
        this['subtask_name'] = subtaskName;
    }
    public get subtaskName(): UpdateTaskSpeedReqSubtaskNameEnum | string | undefined {
        return this['subtask_name'];
    }
    public withProgress(progress: number): UpdateTaskSpeedReq {
        this['progress'] = progress;
        return this;
    }
    public withReplicatesize(replicatesize: number): UpdateTaskSpeedReq {
        this['replicatesize'] = replicatesize;
        return this;
    }
    public withTotalsize(totalsize: number): UpdateTaskSpeedReq {
        this['totalsize'] = totalsize;
        return this;
    }
    public withProcessTrace(processTrace: string): UpdateTaskSpeedReq {
        this['process_trace'] = processTrace;
        return this;
    }
    public set processTrace(processTrace: string  | undefined) {
        this['process_trace'] = processTrace;
    }
    public get processTrace(): string | undefined {
        return this['process_trace'];
    }
    public withMigrateSpeed(migrateSpeed: number): UpdateTaskSpeedReq {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number  | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed(): number | undefined {
        return this['migrate_speed'];
    }
    public withCompressRate(compressRate: number): UpdateTaskSpeedReq {
        this['compress_rate'] = compressRate;
        return this;
    }
    public set compressRate(compressRate: number  | undefined) {
        this['compress_rate'] = compressRate;
    }
    public get compressRate(): number | undefined {
        return this['compress_rate'];
    }
    public withRemainTime(remainTime: number): UpdateTaskSpeedReq {
        this['remain_time'] = remainTime;
        return this;
    }
    public set remainTime(remainTime: number  | undefined) {
        this['remain_time'] = remainTime;
    }
    public get remainTime(): number | undefined {
        return this['remain_time'];
    }
    public withTotalCpuUsage(totalCpuUsage: number): UpdateTaskSpeedReq {
        this['total_cpu_usage'] = totalCpuUsage;
        return this;
    }
    public set totalCpuUsage(totalCpuUsage: number  | undefined) {
        this['total_cpu_usage'] = totalCpuUsage;
    }
    public get totalCpuUsage(): number | undefined {
        return this['total_cpu_usage'];
    }
    public withAgentCpuUsage(agentCpuUsage: number): UpdateTaskSpeedReq {
        this['agent_cpu_usage'] = agentCpuUsage;
        return this;
    }
    public set agentCpuUsage(agentCpuUsage: number  | undefined) {
        this['agent_cpu_usage'] = agentCpuUsage;
    }
    public get agentCpuUsage(): number | undefined {
        return this['agent_cpu_usage'];
    }
    public withTotalMemUsage(totalMemUsage: number): UpdateTaskSpeedReq {
        this['total_mem_usage'] = totalMemUsage;
        return this;
    }
    public set totalMemUsage(totalMemUsage: number  | undefined) {
        this['total_mem_usage'] = totalMemUsage;
    }
    public get totalMemUsage(): number | undefined {
        return this['total_mem_usage'];
    }
    public withAgentMemUsage(agentMemUsage: number): UpdateTaskSpeedReq {
        this['agent_mem_usage'] = agentMemUsage;
        return this;
    }
    public set agentMemUsage(agentMemUsage: number  | undefined) {
        this['agent_mem_usage'] = agentMemUsage;
    }
    public get agentMemUsage(): number | undefined {
        return this['agent_mem_usage'];
    }
    public withTotalDiskIo(totalDiskIo: number): UpdateTaskSpeedReq {
        this['total_disk_io'] = totalDiskIo;
        return this;
    }
    public set totalDiskIo(totalDiskIo: number  | undefined) {
        this['total_disk_io'] = totalDiskIo;
    }
    public get totalDiskIo(): number | undefined {
        return this['total_disk_io'];
    }
    public withAgentDiskIo(agentDiskIo: number): UpdateTaskSpeedReq {
        this['agent_disk_io'] = agentDiskIo;
        return this;
    }
    public set agentDiskIo(agentDiskIo: number  | undefined) {
        this['agent_disk_io'] = agentDiskIo;
    }
    public get agentDiskIo(): number | undefined {
        return this['agent_disk_io'];
    }
    public withNeedMigrationTest(needMigrationTest: boolean): UpdateTaskSpeedReq {
        this['need_migration_test'] = needMigrationTest;
        return this;
    }
    public set needMigrationTest(needMigrationTest: boolean  | undefined) {
        this['need_migration_test'] = needMigrationTest;
    }
    public get needMigrationTest(): boolean | undefined {
        return this['need_migration_test'];
    }
    public withAgentTime(agentTime: string): UpdateTaskSpeedReq {
        this['agent_time'] = agentTime;
        return this;
    }
    public set agentTime(agentTime: string  | undefined) {
        this['agent_time'] = agentTime;
    }
    public get agentTime(): string | undefined {
        return this['agent_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTaskSpeedReqSubtaskNameEnum {
    CREATE_CLOUD_SERVER = 'CREATE_CLOUD_SERVER',
    SSL_CONFIG = 'SSL_CONFIG',
    ATTACH_AGENT_IMAGE = 'ATTACH_AGENT_IMAGE',
    DETTACH_AGENT_IMAGE = 'DETTACH_AGENT_IMAGE',
    FORMAT_DISK_LINUX = 'FORMAT_DISK_LINUX',
    FORMAT_DISK_LINUX_FILE = 'FORMAT_DISK_LINUX_FILE',
    FORMAT_DISK_LINUX_BLOCK = 'FORMAT_DISK_LINUX_BLOCK',
    FORMAT_DISK_WINDOWS = 'FORMAT_DISK_WINDOWS',
    MIGRATE_LINUX_FILE = 'MIGRATE_LINUX_FILE',
    MIGRATE_LINUX_BLOCK = 'MIGRATE_LINUX_BLOCK',
    MIGRATE_WINDOWS_BLOCK = 'MIGRATE_WINDOWS_BLOCK',
    CLONE_VM = 'CLONE_VM',
    SYNC_LINUX_FILE = 'SYNC_LINUX_FILE',
    SYNC_LINUX_BLOCK = 'SYNC_LINUX_BLOCK',
    SYNC_WINDOWS_BLOCK = 'SYNC_WINDOWS_BLOCK',
    CONFIGURE_LINUX = 'CONFIGURE_LINUX',
    CONFIGURE_LINUX_BLOCK = 'CONFIGURE_LINUX_BLOCK',
    CONFIGURE_LINUX_FILE = 'CONFIGURE_LINUX_FILE',
    CONFIGURE_WINDOWS = 'CONFIGURE_WINDOWS'
}
