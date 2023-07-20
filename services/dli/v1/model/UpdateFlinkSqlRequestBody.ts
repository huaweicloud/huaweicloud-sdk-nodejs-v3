

export class UpdateFlinkSqlRequestBody {
    public name?: string;
    public desc?: string;
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
    private 'edge_group_ids'?: Array<string>;
    private 'dirty_data_strategy'?: string;
    private 'udf_jar_url'?: string;
    private 'manager_cu_number'?: number;
    private 'tm_cus'?: number;
    private 'tm_slot_num'?: number;
    private 'resume_checkpoint'?: boolean;
    private 'resume_max_num'?: number;
    private 'runtime_config'?: string;
    private 'operator_config'?: string;
    private 'static_estimator_config'?: string;
    private 'flink_version'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateFlinkSqlRequestBody {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): UpdateFlinkSqlRequestBody {
        this['desc'] = desc;
        return this;
    }
    public withQueueName(queueName: string): UpdateFlinkSqlRequestBody {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withSqlBody(sqlBody: string): UpdateFlinkSqlRequestBody {
        this['sql_body'] = sqlBody;
        return this;
    }
    public set sqlBody(sqlBody: string  | undefined) {
        this['sql_body'] = sqlBody;
    }
    public get sqlBody(): string | undefined {
        return this['sql_body'];
    }
    public withRunMode(runMode: string): UpdateFlinkSqlRequestBody {
        this['run_mode'] = runMode;
        return this;
    }
    public set runMode(runMode: string  | undefined) {
        this['run_mode'] = runMode;
    }
    public get runMode(): string | undefined {
        return this['run_mode'];
    }
    public withCuNumber(cuNumber: number): UpdateFlinkSqlRequestBody {
        this['cu_number'] = cuNumber;
        return this;
    }
    public set cuNumber(cuNumber: number  | undefined) {
        this['cu_number'] = cuNumber;
    }
    public get cuNumber(): number | undefined {
        return this['cu_number'];
    }
    public withParallelNumber(parallelNumber: number): UpdateFlinkSqlRequestBody {
        this['parallel_number'] = parallelNumber;
        return this;
    }
    public set parallelNumber(parallelNumber: number  | undefined) {
        this['parallel_number'] = parallelNumber;
    }
    public get parallelNumber(): number | undefined {
        return this['parallel_number'];
    }
    public withCheckpointEnabled(checkpointEnabled: boolean): UpdateFlinkSqlRequestBody {
        this['checkpoint_enabled'] = checkpointEnabled;
        return this;
    }
    public set checkpointEnabled(checkpointEnabled: boolean  | undefined) {
        this['checkpoint_enabled'] = checkpointEnabled;
    }
    public get checkpointEnabled(): boolean | undefined {
        return this['checkpoint_enabled'];
    }
    public withCheckpointMode(checkpointMode: number): UpdateFlinkSqlRequestBody {
        this['checkpoint_mode'] = checkpointMode;
        return this;
    }
    public set checkpointMode(checkpointMode: number  | undefined) {
        this['checkpoint_mode'] = checkpointMode;
    }
    public get checkpointMode(): number | undefined {
        return this['checkpoint_mode'];
    }
    public withCheckpointInterval(checkpointInterval: number): UpdateFlinkSqlRequestBody {
        this['checkpoint_interval'] = checkpointInterval;
        return this;
    }
    public set checkpointInterval(checkpointInterval: number  | undefined) {
        this['checkpoint_interval'] = checkpointInterval;
    }
    public get checkpointInterval(): number | undefined {
        return this['checkpoint_interval'];
    }
    public withObsBucket(obsBucket: string): UpdateFlinkSqlRequestBody {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withLogEnabled(logEnabled: boolean): UpdateFlinkSqlRequestBody {
        this['log_enabled'] = logEnabled;
        return this;
    }
    public set logEnabled(logEnabled: boolean  | undefined) {
        this['log_enabled'] = logEnabled;
    }
    public get logEnabled(): boolean | undefined {
        return this['log_enabled'];
    }
    public withSmnTopic(smnTopic: string): UpdateFlinkSqlRequestBody {
        this['smn_topic'] = smnTopic;
        return this;
    }
    public set smnTopic(smnTopic: string  | undefined) {
        this['smn_topic'] = smnTopic;
    }
    public get smnTopic(): string | undefined {
        return this['smn_topic'];
    }
    public withRestartWhenException(restartWhenException: boolean): UpdateFlinkSqlRequestBody {
        this['restart_when_exception'] = restartWhenException;
        return this;
    }
    public set restartWhenException(restartWhenException: boolean  | undefined) {
        this['restart_when_exception'] = restartWhenException;
    }
    public get restartWhenException(): boolean | undefined {
        return this['restart_when_exception'];
    }
    public withIdleStateRetention(idleStateRetention: number): UpdateFlinkSqlRequestBody {
        this['idle_state_retention'] = idleStateRetention;
        return this;
    }
    public set idleStateRetention(idleStateRetention: number  | undefined) {
        this['idle_state_retention'] = idleStateRetention;
    }
    public get idleStateRetention(): number | undefined {
        return this['idle_state_retention'];
    }
    public withEdgeGroupIds(edgeGroupIds: Array<string>): UpdateFlinkSqlRequestBody {
        this['edge_group_ids'] = edgeGroupIds;
        return this;
    }
    public set edgeGroupIds(edgeGroupIds: Array<string>  | undefined) {
        this['edge_group_ids'] = edgeGroupIds;
    }
    public get edgeGroupIds(): Array<string> | undefined {
        return this['edge_group_ids'];
    }
    public withDirtyDataStrategy(dirtyDataStrategy: string): UpdateFlinkSqlRequestBody {
        this['dirty_data_strategy'] = dirtyDataStrategy;
        return this;
    }
    public set dirtyDataStrategy(dirtyDataStrategy: string  | undefined) {
        this['dirty_data_strategy'] = dirtyDataStrategy;
    }
    public get dirtyDataStrategy(): string | undefined {
        return this['dirty_data_strategy'];
    }
    public withUdfJarUrl(udfJarUrl: string): UpdateFlinkSqlRequestBody {
        this['udf_jar_url'] = udfJarUrl;
        return this;
    }
    public set udfJarUrl(udfJarUrl: string  | undefined) {
        this['udf_jar_url'] = udfJarUrl;
    }
    public get udfJarUrl(): string | undefined {
        return this['udf_jar_url'];
    }
    public withManagerCuNumber(managerCuNumber: number): UpdateFlinkSqlRequestBody {
        this['manager_cu_number'] = managerCuNumber;
        return this;
    }
    public set managerCuNumber(managerCuNumber: number  | undefined) {
        this['manager_cu_number'] = managerCuNumber;
    }
    public get managerCuNumber(): number | undefined {
        return this['manager_cu_number'];
    }
    public withTmCus(tmCus: number): UpdateFlinkSqlRequestBody {
        this['tm_cus'] = tmCus;
        return this;
    }
    public set tmCus(tmCus: number  | undefined) {
        this['tm_cus'] = tmCus;
    }
    public get tmCus(): number | undefined {
        return this['tm_cus'];
    }
    public withTmSlotNum(tmSlotNum: number): UpdateFlinkSqlRequestBody {
        this['tm_slot_num'] = tmSlotNum;
        return this;
    }
    public set tmSlotNum(tmSlotNum: number  | undefined) {
        this['tm_slot_num'] = tmSlotNum;
    }
    public get tmSlotNum(): number | undefined {
        return this['tm_slot_num'];
    }
    public withResumeCheckpoint(resumeCheckpoint: boolean): UpdateFlinkSqlRequestBody {
        this['resume_checkpoint'] = resumeCheckpoint;
        return this;
    }
    public set resumeCheckpoint(resumeCheckpoint: boolean  | undefined) {
        this['resume_checkpoint'] = resumeCheckpoint;
    }
    public get resumeCheckpoint(): boolean | undefined {
        return this['resume_checkpoint'];
    }
    public withResumeMaxNum(resumeMaxNum: number): UpdateFlinkSqlRequestBody {
        this['resume_max_num'] = resumeMaxNum;
        return this;
    }
    public set resumeMaxNum(resumeMaxNum: number  | undefined) {
        this['resume_max_num'] = resumeMaxNum;
    }
    public get resumeMaxNum(): number | undefined {
        return this['resume_max_num'];
    }
    public withRuntimeConfig(runtimeConfig: string): UpdateFlinkSqlRequestBody {
        this['runtime_config'] = runtimeConfig;
        return this;
    }
    public set runtimeConfig(runtimeConfig: string  | undefined) {
        this['runtime_config'] = runtimeConfig;
    }
    public get runtimeConfig(): string | undefined {
        return this['runtime_config'];
    }
    public withOperatorConfig(operatorConfig: string): UpdateFlinkSqlRequestBody {
        this['operator_config'] = operatorConfig;
        return this;
    }
    public set operatorConfig(operatorConfig: string  | undefined) {
        this['operator_config'] = operatorConfig;
    }
    public get operatorConfig(): string | undefined {
        return this['operator_config'];
    }
    public withStaticEstimatorConfig(staticEstimatorConfig: string): UpdateFlinkSqlRequestBody {
        this['static_estimator_config'] = staticEstimatorConfig;
        return this;
    }
    public set staticEstimatorConfig(staticEstimatorConfig: string  | undefined) {
        this['static_estimator_config'] = staticEstimatorConfig;
    }
    public get staticEstimatorConfig(): string | undefined {
        return this['static_estimator_config'];
    }
    public withFlinkVersion(flinkVersion: string): UpdateFlinkSqlRequestBody {
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