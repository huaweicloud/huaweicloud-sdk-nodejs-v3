import { TmsTagEntity } from './TmsTagEntity';


export class CreateFlinkSqlJobRequestBody {
    public name?: string;
    public desc?: string;
    private 'template_id'?: number;
    private 'queue_name'?: string;
    private 'sql_body'?: string;
    private 'run_mode'?: string;
    private 'cu_number'?: number;
    private 'parallel_number'?: number;
    private 'checkpoint_enabled'?: boolean;
    private 'checkpoint_mode'?: number;
    private 'checkpoint_interval'?: number;
    private 'obs_bucket'?: string;
    private 'log_enabled'?: boolean;
    private 'smn_topic'?: string;
    private 'restart_when_exception'?: boolean;
    private 'idle_state_retention'?: number;
    private 'job_type'?: string;
    private 'edge_group_ids'?: Array<string>;
    private 'dirty_data_strategy'?: string;
    private 'udf_jar_url'?: string;
    private 'manager_cu_number'?: number;
    private 'tm_cus'?: number;
    private 'tm_slot_num'?: number;
    public tags?: Array<TmsTagEntity>;
    private 'resume_checkpoint'?: boolean;
    private 'resume_max_num'?: number;
    private 'runtime_config'?: string;
    private 'flink_version'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateFlinkSqlJobRequestBody {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): CreateFlinkSqlJobRequestBody {
        this['desc'] = desc;
        return this;
    }
    public withTemplateId(templateId: number): CreateFlinkSqlJobRequestBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withQueueName(queueName: string): CreateFlinkSqlJobRequestBody {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withSqlBody(sqlBody: string): CreateFlinkSqlJobRequestBody {
        this['sql_body'] = sqlBody;
        return this;
    }
    public set sqlBody(sqlBody: string  | undefined) {
        this['sql_body'] = sqlBody;
    }
    public get sqlBody(): string | undefined {
        return this['sql_body'];
    }
    public withRunMode(runMode: string): CreateFlinkSqlJobRequestBody {
        this['run_mode'] = runMode;
        return this;
    }
    public set runMode(runMode: string  | undefined) {
        this['run_mode'] = runMode;
    }
    public get runMode(): string | undefined {
        return this['run_mode'];
    }
    public withCuNumber(cuNumber: number): CreateFlinkSqlJobRequestBody {
        this['cu_number'] = cuNumber;
        return this;
    }
    public set cuNumber(cuNumber: number  | undefined) {
        this['cu_number'] = cuNumber;
    }
    public get cuNumber(): number | undefined {
        return this['cu_number'];
    }
    public withParallelNumber(parallelNumber: number): CreateFlinkSqlJobRequestBody {
        this['parallel_number'] = parallelNumber;
        return this;
    }
    public set parallelNumber(parallelNumber: number  | undefined) {
        this['parallel_number'] = parallelNumber;
    }
    public get parallelNumber(): number | undefined {
        return this['parallel_number'];
    }
    public withCheckpointEnabled(checkpointEnabled: boolean): CreateFlinkSqlJobRequestBody {
        this['checkpoint_enabled'] = checkpointEnabled;
        return this;
    }
    public set checkpointEnabled(checkpointEnabled: boolean  | undefined) {
        this['checkpoint_enabled'] = checkpointEnabled;
    }
    public get checkpointEnabled(): boolean | undefined {
        return this['checkpoint_enabled'];
    }
    public withCheckpointMode(checkpointMode: number): CreateFlinkSqlJobRequestBody {
        this['checkpoint_mode'] = checkpointMode;
        return this;
    }
    public set checkpointMode(checkpointMode: number  | undefined) {
        this['checkpoint_mode'] = checkpointMode;
    }
    public get checkpointMode(): number | undefined {
        return this['checkpoint_mode'];
    }
    public withCheckpointInterval(checkpointInterval: number): CreateFlinkSqlJobRequestBody {
        this['checkpoint_interval'] = checkpointInterval;
        return this;
    }
    public set checkpointInterval(checkpointInterval: number  | undefined) {
        this['checkpoint_interval'] = checkpointInterval;
    }
    public get checkpointInterval(): number | undefined {
        return this['checkpoint_interval'];
    }
    public withObsBucket(obsBucket: string): CreateFlinkSqlJobRequestBody {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withLogEnabled(logEnabled: boolean): CreateFlinkSqlJobRequestBody {
        this['log_enabled'] = logEnabled;
        return this;
    }
    public set logEnabled(logEnabled: boolean  | undefined) {
        this['log_enabled'] = logEnabled;
    }
    public get logEnabled(): boolean | undefined {
        return this['log_enabled'];
    }
    public withSmnTopic(smnTopic: string): CreateFlinkSqlJobRequestBody {
        this['smn_topic'] = smnTopic;
        return this;
    }
    public set smnTopic(smnTopic: string  | undefined) {
        this['smn_topic'] = smnTopic;
    }
    public get smnTopic(): string | undefined {
        return this['smn_topic'];
    }
    public withRestartWhenException(restartWhenException: boolean): CreateFlinkSqlJobRequestBody {
        this['restart_when_exception'] = restartWhenException;
        return this;
    }
    public set restartWhenException(restartWhenException: boolean  | undefined) {
        this['restart_when_exception'] = restartWhenException;
    }
    public get restartWhenException(): boolean | undefined {
        return this['restart_when_exception'];
    }
    public withIdleStateRetention(idleStateRetention: number): CreateFlinkSqlJobRequestBody {
        this['idle_state_retention'] = idleStateRetention;
        return this;
    }
    public set idleStateRetention(idleStateRetention: number  | undefined) {
        this['idle_state_retention'] = idleStateRetention;
    }
    public get idleStateRetention(): number | undefined {
        return this['idle_state_retention'];
    }
    public withJobType(jobType: string): CreateFlinkSqlJobRequestBody {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withEdgeGroupIds(edgeGroupIds: Array<string>): CreateFlinkSqlJobRequestBody {
        this['edge_group_ids'] = edgeGroupIds;
        return this;
    }
    public set edgeGroupIds(edgeGroupIds: Array<string>  | undefined) {
        this['edge_group_ids'] = edgeGroupIds;
    }
    public get edgeGroupIds(): Array<string> | undefined {
        return this['edge_group_ids'];
    }
    public withDirtyDataStrategy(dirtyDataStrategy: string): CreateFlinkSqlJobRequestBody {
        this['dirty_data_strategy'] = dirtyDataStrategy;
        return this;
    }
    public set dirtyDataStrategy(dirtyDataStrategy: string  | undefined) {
        this['dirty_data_strategy'] = dirtyDataStrategy;
    }
    public get dirtyDataStrategy(): string | undefined {
        return this['dirty_data_strategy'];
    }
    public withUdfJarUrl(udfJarUrl: string): CreateFlinkSqlJobRequestBody {
        this['udf_jar_url'] = udfJarUrl;
        return this;
    }
    public set udfJarUrl(udfJarUrl: string  | undefined) {
        this['udf_jar_url'] = udfJarUrl;
    }
    public get udfJarUrl(): string | undefined {
        return this['udf_jar_url'];
    }
    public withManagerCuNumber(managerCuNumber: number): CreateFlinkSqlJobRequestBody {
        this['manager_cu_number'] = managerCuNumber;
        return this;
    }
    public set managerCuNumber(managerCuNumber: number  | undefined) {
        this['manager_cu_number'] = managerCuNumber;
    }
    public get managerCuNumber(): number | undefined {
        return this['manager_cu_number'];
    }
    public withTmCus(tmCus: number): CreateFlinkSqlJobRequestBody {
        this['tm_cus'] = tmCus;
        return this;
    }
    public set tmCus(tmCus: number  | undefined) {
        this['tm_cus'] = tmCus;
    }
    public get tmCus(): number | undefined {
        return this['tm_cus'];
    }
    public withTmSlotNum(tmSlotNum: number): CreateFlinkSqlJobRequestBody {
        this['tm_slot_num'] = tmSlotNum;
        return this;
    }
    public set tmSlotNum(tmSlotNum: number  | undefined) {
        this['tm_slot_num'] = tmSlotNum;
    }
    public get tmSlotNum(): number | undefined {
        return this['tm_slot_num'];
    }
    public withTags(tags: Array<TmsTagEntity>): CreateFlinkSqlJobRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withResumeCheckpoint(resumeCheckpoint: boolean): CreateFlinkSqlJobRequestBody {
        this['resume_checkpoint'] = resumeCheckpoint;
        return this;
    }
    public set resumeCheckpoint(resumeCheckpoint: boolean  | undefined) {
        this['resume_checkpoint'] = resumeCheckpoint;
    }
    public get resumeCheckpoint(): boolean | undefined {
        return this['resume_checkpoint'];
    }
    public withResumeMaxNum(resumeMaxNum: number): CreateFlinkSqlJobRequestBody {
        this['resume_max_num'] = resumeMaxNum;
        return this;
    }
    public set resumeMaxNum(resumeMaxNum: number  | undefined) {
        this['resume_max_num'] = resumeMaxNum;
    }
    public get resumeMaxNum(): number | undefined {
        return this['resume_max_num'];
    }
    public withRuntimeConfig(runtimeConfig: string): CreateFlinkSqlJobRequestBody {
        this['runtime_config'] = runtimeConfig;
        return this;
    }
    public set runtimeConfig(runtimeConfig: string  | undefined) {
        this['runtime_config'] = runtimeConfig;
    }
    public get runtimeConfig(): string | undefined {
        return this['runtime_config'];
    }
    public withFlinkVersion(flinkVersion: string): CreateFlinkSqlJobRequestBody {
        this['flink_version'] = flinkVersion;
        return this;
    }
    public set flinkVersion(flinkVersion: string  | undefined) {
        this['flink_version'] = flinkVersion;
    }
    public get flinkVersion(): string | undefined {
        return this['flink_version'];
    }
}